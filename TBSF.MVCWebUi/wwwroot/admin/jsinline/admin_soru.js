$(document).ready(function () {

$("#datemask").inputmask("dd/mm/yyyy", {"placeholder": "gg/aa/yyyy"});




/**
 * easyui tree extend for 'unselect' event
 * @author Mustafa Zeynel Dağlı
 * @since 04/04/2016
 */
$.extend($.fn.tree.methods,{
        unselect:function(jq,target){
                return jq.each(function(){
                        var opts = $(this).tree('options');
                        $(target).removeClass('tree-node-selected');
                        if (opts.onUnselect){
                                opts.onUnselect.call(this, $(this).tree('getNode',target));
                        }
                });
        }
});

/**
 * questions datagrid is being filled
 * @since 14/07/2016
 */
$('#tt_grid_dynamic').datagrid({
    onDblClickRow : function (index, row) {
        
    },  
    url : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
    queryParams: {
            pk: $('#pk').val(),
            subject: 'datagrid',
            url : 'fillAllQuestionLists_infoQuestions',
            sort : 'id',
            order : 'desc',
            /*machine_groups_id : null,
            filterRules:null*/
    },
    width : '100%',
    singleSelect:true,
    pagination : true,
    collapsible:true,
    method:'get',
    idField:'id',
    //fit:true,
    //fitColumns : true,
    remoteFilter: true,
    remoteSort:true,
    multiSort:false,
    columns:
        [[
            {field:'id',title:'ID'},
            {field:'question',title:'Soru',sortable:true,width:300},
            {field:'description',title:'Açıklama',sortable:true,width:300},
            {field:'corporation',title:'Kurum',sortable:true,width:200},
            {field:'difficulty',title:'Zorluk',sortable:true,width:100},
            {field:'state_required_time',title:'Süre',sortable:true,width:100},
            {field:'action',title:'Action',width:120,align:'center',
                formatter:function(value,row,index){
                    if(row.attributes.active == 0) {
                        var e = '<button style="padding : 2px 4px;" title="Pasif yap"  class="btn btn-primary" type="button" onclick="return activePassiveSoruWrapper(event, '+row.id+');"><i class="fa fa-minus-circle"></i></button>';
                    } else {
                        var e = '<button style="padding : 2px 4px;" title="Aktif yap"  class="btn btn-warning" type="button" onclick="return activePassiveSoruWrapper(event, '+row.id+');"><i class="fa fa-plus-circle"></i></button>';
                    }
                    var d = '<button style="padding : 2px 4px;" title="Sil"  class="btn btn-danger" type="button" onclick="return deleteSinavUltimatelyDialog('+row.id+', '+index+');"><i class="fa fa-eraser"></i></button>';
                    var u = '<button style="padding : 2px 4px;" title="Güncelle"  class="btn btn-info" type="button" onclick="return updateSoruDialog('+row.id+', { question : \''+row.question+'\',\n\
                                                                                                                                                                       description : \''+row.description+'\',\n\
                                                                                                                                                                       required_time : '+row.required_time+',\n\
                                                                                                                                                                       difficulty_id : '+row.difficulty_id+',\n\
                                                                                                                                                                       point : \''+row.point+'\',\n\
                                                                                                                                                                        corporation_id : \''+row.corporation_id+'\',\n\
                                                                                                                                                                        corporation : \''+row.corporation+'\',\n\
                                                                                                                                                                        state_required_time : \''+row.state_required_time+'\',\n\
                                                                                                                                                                        difficulty : \''+row.difficulty+'\',\n\
                                                                                                                                                                        source : \''+row.source+'\',\n\
                                                                                                                                                                       } );"><i class="fa fa-arrow-circle-up"></i></button>';
                    var k = '<button style="padding : 2px 4px;" title="Soru Soruları Ekle/Çıkar"  class="btn btn-success" type="button" onclick="return updateSoruSecenekDialog('+row.id+', { question : \''+row.question+'\',\n\                                                                                                                   \n\
                                                                                                                                                                       description : \''+row.description+'\',\n\
                                                                                                                                                                       required_time : '+row.required_time+',\n\
                                                                                                                                                                       difficulty_id : '+row.difficulty_id+',\n\
                                                                                                                                                                       point : \''+row.point+'\',\n\
                                                                                                                                                                        corporation_id : \''+row.corporation_id+'\',\n\
                                                                                                                                                                        corporation : \''+row.corporation+'\',\n\
                                                                                                                                                                        state_required_time : \''+row.state_required_time+'\',\n\
                                                                                                                                                                        difficulty : \''+row.difficulty+'\',\n\
                                                                                                                                                                        source : \''+row.source+'\',\n\
                                                                                                                                                                       } );"><i class="fa fa-save"></i></button>';  
                    return e+d+u+k;    
                }
            },
        ]]   
});
$('#tt_grid_dynamic').datagrid('enableFilter');


/**
 * wrapper for exam/question update process
 * @param {type} nodeID
 * @param {type} nodeName
 * @returns {Boolean}
 * @author Mustafa Zeynel Dağlı
 * @since 13/06/2017
 */
window.updateSoruSecenekDialog = function (id, row) {
    window.gridReloadController = false;
    //console.log(row);
    BootstrapDialog.show({  
        
         title: '"'+ row.question + '" sorusunun şıklarını güncellemektesiniz...',
         message: function (dialogRef) {
                     var dialogRef = dialogRef;
                     var $message = $(' <div class="row">\n\
                                             <div class="col-md-12">\n\
                                                 <div id="loading-image-crud-popup" class="box box-primary">\n\
                                                     <form id="soruSıkPopup" method="get" class="form-horizontal">\n\
                                                     <input type="hidden" id="machine_tool_group_id_popup" name="machine_tool_group_id_popup"  />\n\
                                                     <div class="hr-line-dashed"></div>\n\
                                                         <div class="form-group" style="margin-top: 20px">\n\
                                                            <label class="col-sm-2 control-label">Şıklar</label>\n\
                                                            <div class="col-sm-10">\n\
                                                                <div id="loading-image-diffuculties-popup" class="input-group">\n\
                                                                    <div class="input-group-addon">\n\
                                                                        <i class="fa fa-hand-o-right"></i>\n\
                                                                    </div>\n\
                                                                    <div id="loading-image-popup">\n\
                                                                        <ul id="tt_tree_soruchoice_popup" class="easyui-tree" ></ul>\n\
                                                                    </div>\
                                                                </div>\n\
                                                            </div>\n\
                                                        </div>\n\
                                                        <div class="form-group">\n\
                                                            <label class="col-sm-2 control-label">Soru Şıkkı</label>\n\
                                                            <div class="col-sm-10">\n\
                                                                <div id="loading-image-diffuculties-popup" class="input-group">\n\
                                                                    <div class="input-group-addon">\n\
                                                                        <i class="fa fa-hand-o-right"></i>\n\
                                                                    </div>\n\
                                                                    <div id="editor"></div>\n\
                                                                </div>\n\
                                                            </div>\n\
                                                        </div>\n\
                                                         <div class="hr-line-dashed"></div>\n\
                                                         <div class="form-group">\n\
                                                             <div class="col-sm-10 col-sm-offset-2">\n\
                                                             <button id="insertSoruChoice" class="btn btn-primary" type="submit" onclick="return insertSoruChoiceWrapper(event, '+id+');">\n\
                                                                 <i class="fa fa-save"></i> Kaydet </button>\n\
                                                             <button id="updateSoruChoice" class="btn btn-flat" type="submit" onclick="return updateSoruChoiceWrapper(event, '+id+');" disabled><i class="fa fa-gears"></i> Güncelle </button>\n\
                                                             <button id="resetForm" class="btn btn-flat" type="reset" onclick="regulateButtonsSoruChoice();" ><i class="fa fa-remove"></i> Reset </button>\n\
                                                         </div>\n\
                                                     </div>\n\
                                                 </form>\n\
                                             </div>\n\
                                         </div>\n\
                                     </div>');
                     return $message;
                 },
         type: BootstrapDialog.TYPE_PRIMARY,
         onshown : function () {  
             
            /** Default editor configuration **/
            $('#editor').trumbowyg();

            $('#soruFormPopup').validationEngine();


            $("#loading-image-popup").loadImager();
            $("#loading-image-popup").loadImager('appendImage');

            $('#tt_tree_soruchoice_popup').tree({
                url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=fillAnswerOfQuestionTree_infoQuestionAnswers&pk=' + $("#pk").val()+ '&question_id='+id,
                method: 'get',
                animate: true,
                checkbox: true,
                cascadeCheck: false,
                lines: true,
                dnd : true,
                onAfterEdit: function (node) {

                },
                onCheck : function(node, checked){
                    if(checked==true) {
                        //var choice_id = node.id;
                        //updateSoruChoiceTrue(choice_id); 
                        /*var choice_id = node.id;
                        wcm.warningComplexMessage({onConfirm : function(event, data) {
                            updateSoruChoiceTrue(choice_id);  
                        }
                        });
                        wcm.warningComplexMessage({onGiveup : function(event, data) {
                            //addSinavSoru(id, index);
                            //alert('gave up');
                            $('#tt_tree_soruchoice_popup').tree('uncheck', node.target);
                        }
                        });
                        wcm.warningComplexMessage('show', 'Şık Doğru Cevap Olarak işaretlenecektir !', 
                                                          'Şık Doğru Cevap Olarak işaretlenecektir, devam etmek istiyor musunuz!! ');*/
                    }
                    
                },
                onLoadSuccess: function (node, data) {
                    if(data.length>0) {
                        $("#loading-image-popup").loadImager('removeLoadImage');
                    } else {
                        wm.warningMessage('resetOnShown');
                        wm.warningMessage('show', 'Sorunun Şıkkı Bulunmamaktadır', 'Soruya henüz şık eklenmemiştir!');
                        $("#loading-image-popup").loadImager('removeLoadImage');
                    }
                },
                onSelect: function (node) {
                    //$('#kurum_name').val(selectedItem.text);
                    //$('#kurum_abbreviation').val(selectedItem.attributes.abbreviation);
                    $("#textarea").html('test');
                    $('#updateSoruChoice').attr('disabled', false);
                    $('#insertSoruChoice').attr('disabled', true);
                    //$('#editor').trumbowyg('html', "<p>Your content here</p>");

                    $('#editor').html(node.text);

                },
                formatter: function (node) {
                    var s = node.text;
                    //var id = node.id;
                    s += '&nbsp;<i class="fa fa-fw fa-trash-o" title="Şık sil" onclick="return deleteSoruChoiceDialog('+node.id+','+id+')"></i>&nbsp;'
                    s += '&nbsp;<i class="fa fa-fw fa-check" title="Şık doğrula" onclick="return updateSoruChoiceTrueDialog('+node.id+','+id+')"></i>&nbsp;'
                    return s;
 
                }
               });


         },
         onhide : function() {
         },
     });
     return false;
}

/**
* reset button function setting disabled/ enabled
* for 'insert' and 'update' form buttons
* @returns null
* @author Mustafa Zeynel Dağlı
* @since 15/06/2017
*/
window.regulateButtonsSoruChoice = function () {
   $('#updateSoruChoice').attr('disabled', true);
   $('#insertSoruChoice').attr('disabled', false);
   if($('#tt_tree_soruchoice_popup').tree('getSelected') != null) {
       var node = $('#tt_tree_soruchoice_popup').tree('getSelected');
       $('#tt_tree_soruchoice_popup').tree('unselect', node.target);
       //$('#tt_tree_menu').tree('uncheck', node.target);
   }
   $('#editor').html('');
}


/**
 *  question choices are inserted
 * @param {type} nodeID
 * @param {type} nodeName
 * @returns {Boolean}
 * @author Mustafa Zeynel Dağlı
 * @since 15/06/2017
 */
window.insertSoruChoice = function(id) {
    var loader = $("#loading-image-popup").loadImager();
    loader.loadImager('appendImage');
    var choice = $('#editor').html();
    /*console.log(node);
    console.log(id);
    console.log(tagBuilder);*/

    var aj = $(window).ajaxCall({
         proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',   
         data : {
             url:'pkInsert_infoQuestionAnswers' ,
             question_id : id,
             description : choice,
             pk : $("#pk").val()
         }
    })
    aj.ajaxCall ({  
          onError : function (event, textStatus, errorThrown) {   
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Şık Ekleme İşlemi Başarısız...', 
                                       'Şık ekleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ')
              console.error('"pkInsert_infoQuestionAnswers" servis hatası->'+textStatus);
          },
          onSuccess : function (event, data) {
            var data = data;                                                
            loader.loadImager('removeLoadImage');
            
            sm.successMessage('show', 'Şık Ekleme İşlemi Başarılı...', 
                                       'Şık ekleme İşlemini gerçekleştirdiniz... ',
                                       data);
            regulateButtonsSoruChoice();
            $('#tt_tree_soruchoice_popup').tree({
                url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=fillAnswerOfQuestionTree_infoQuestionAnswers&pk=' + $("#pk").val()+ '&question_id='+id});
            //$('#tt_tree_soruchoice_popup').tree('reload');

          },
          onErrorDataNull : function (event, data) {
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Şık Ekleme İşlemi Başarısız...', 
                                       'Şık ekleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
              console.error('"pkInsert_infoQuestionAnswers" servis datası boştur!!');
          },
          onErrorMessage : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Şık Ekleme İşlemi Başarısız...', 
                                     'Şık ekleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkInsert_infoQuestionAnswers" servis hatası->'+data);
          },
          onError23503 : function (event, data) {
          },
          onError23505 : function (event, data) {
              dm.dangerMessage({
                 onShown : function(event, data) {
                     //$('#machPropFormInsertPopup')[0].reset();
                     loader.loadImager('removeLoadImage');
                 }
              });
              dm.dangerMessage('show', 'Şık Ekleme İşlemi Başarısız...', 
                                       'Şık daha önce eklenmiştir, yeni bir yetki deneyiniz... ');
          }
    }) 
    aj.ajaxCall('call');
}


/**
 * wrapper for question choices are insert
 * @param {type} nodeID
 * @param {type} nodeName
 * @returns {Boolean}
 * @author Mustafa Zeynel Dağlı
 * @since 15/06/2017
 */
window.insertSoruChoiceWrapper = function(event, id) {
    if($('#editor').html()!==null) {
        insertSoruChoice(id);
        return false;
    } else {
        wm.warningMessage('resetOnShown');
        wm.warningMessage('show', 'Soru Şıkkı Yazınız', 'Lütfen soru şıkkı yazınız!');
        return false;
    }
}

/**
 *  question choices are chacked as true
 * @param {type} nodeID
 * @param {type} nodeName
 * @returns {Boolean}
 * @author Mustafa Zeynel Dağlı
 * @since 16/06/2017
 */
window.updateSoruChoiceTrue = function(node_id, question_id) {
    var loader = $("#loading-image-popup").loadImager();
    loader.loadImager('appendImage');

    var node_id = node_id;

    /*console.log(node);
    console.log(id);
    console.log(tagBuilder);*/

    var aj = $(window).ajaxCall({ 
         proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',   
         data : {
             url:'pkUpdateCorrect_infoQuestionAnswers' ,
             id : node_id,
             correct : true,
             //correct : false, 
             pk : $("#pk").val() 
         }
    })
    aj.ajaxCall ({  
          onError : function (event, textStatus, errorThrown) {   
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Şık Doğrulama İşlemi Başarısız...', 
                                       'Şık doğrulama işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ')
              console.error('"pkUpdateCorrect_infoQuestionAnswers" servis hatası->'+textStatus);
          },
          onSuccess : function (event, data) {
            var data = data;                                                
            loader.loadImager('removeLoadImage');
            
            sm.successMessage('show', 'Şık Doğrulama İşlemi Başarılı...', 
                                       'Şık doğrulama İşlemini gerçekleştirdiniz... ',
                                       data);
            regulateButtonsSoruChoice();
            $('#tt_tree_soruchoice_popup').tree({
                url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=fillAnswerOfQuestionTree_infoQuestionAnswers&pk=' + $("#pk").val()+ '&question_id='+question_id});
            //$('#tt_tree_soruchoice_popup').tree('reload');

          },
          onErrorDataNull : function (event, data) {
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Şık Doğrulama İşlemi Başarısız...', 
                                       'Şık doğrulama işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
              console.error('"pkUpdateCorrect_infoQuestionAnswers" servis datası boştur!!');
          },
          onErrorMessage : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Şık Doğrulama İşlemi Başarısız...', 
                                     'Şık doğrulama işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkUpdateCorrect_infoQuestionAnswers" servis hatası->'+textStatus);
          },
          onError23503 : function (event, data) {
          },
          onError23505 : function (event, data) {
              dm.dangerMessage({
                 onShown : function(event, data) {
                     //$('#machPropFormInsertPopup')[0].reset();
                     loader.loadImager('removeLoadImage');
                 }
              });
              dm.dangerMessage('show', 'Şık Doğrulama İşlemi Başarısız...', 
                                       'Şık daha önce eklenmiştir, yeni bir şık deneyiniz... ');
          }
    }) 
    aj.ajaxCall('call');
}

/**
 * wrapper for question choices are checked as true
 * @param {type} nodeID
 * @param {type} nodeName
 * @returns {Boolean}
 * @author Mustafa Zeynel Dağlı
 * @since 16/06/2017
 */
window.updateSoruChoiceTrueDialog = function(node_id, question_id){

    wcm.warningComplexMessage({onConfirm : function(event, data) {
        updateSoruChoiceTrue(node_id, question_id);
        return false;
    }
    });
    wcm.warningComplexMessage('show', 'Soru Silme İşlemi Gerçekleştirmek Üzeresiniz!', 
                                      'Soru silmek üzeresiniz, silme işlemi geri alınamaz!! ');
}


/**
 *  question choices are updated
 * @param {type} nodeID
 * @param {type} nodeName
 * @returns {Boolean}
 * @author Mustafa Zeynel Dağlı
 * @since 15/06/2017
 */
window.updateSoruChoice = function(question_id) {
    var loader = $("#loading-image-popup").loadImager();
    loader.loadImager('appendImage');
    
    var node = $('#tt_tree_soruchoice_popup').tree('getSelected');
    var choice_id = node.id;
    var question_id = question_id;
    var description = $('#editor').html();
    
    /*console.log(node);
    console.log(id);
    console.log(tagBuilder);*/

    var aj = $(window).ajaxCall({ 
         proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',   
         data : {
             url:'pkUpdate_infoQuestionAnswers' ,
             question_id : question_id,
             id : choice_id,
             description : description,
             //correct : false, 
             pk : $("#pk").val() 
         }
    })
    aj.ajaxCall ({  
          onError : function (event, textStatus, errorThrown) {   
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Şık Ekleme İşlemi Başarısız...', 
                                       'Şık ekleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ')
              console.error('"pkUpdate_infoQuestionAnswers" servis hatası->'+textStatus);
          },
          onSuccess : function (event, data) {
            var data = data;                                                
            loader.loadImager('removeLoadImage');
            
            sm.successMessage('show', 'Şık Güncelleme İşlemi Başarılı...', 
                                       'Şık güncelleme İşlemini gerçekleştirdiniz... ',
                                       data);
            regulateButtonsSoruChoice();
            $('#tt_tree_soruchoice_popup').tree({
                url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=fillAnswerOfQuestionTree_infoQuestionAnswers&pk=' + $("#pk").val()+ '&question_id='+question_id});
            //$('#tt_tree_soruchoice_popup').tree('reload');

          },
          onErrorDataNull : function (event, data) {
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Şık Güncelleme İşlemi Başarısız...', 
                                       'Şık güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
              console.error('"pkUpdate_infoQuestionAnswers" servis datası boştur!!');
          },
          onErrorMessage : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Şık Güncelleme İşlemi Başarısız...', 
                                     'Şık güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkUpdate_infoQuestionAnswers" servis hatası->'+textStatus);
          },
          onError23503 : function (event, data) {
          },
          onError23505 : function (event, data) {
              dm.dangerMessage({
                 onShown : function(event, data) {
                     //$('#machPropFormInsertPopup')[0].reset();
                     loader.loadImager('removeLoadImage');
                 }
              });
              dm.dangerMessage('show', 'Şık Güncelleme İşlemi Başarısız...', 
                                       'Şık daha önce eklenmiştir, yeni bir şık deneyiniz... ');
          }
    }) 
    aj.ajaxCall('call');
}


/**
 * wrapper for question choices are update
 * @param {type} nodeID
 * @param {type} nodeName
 * @returns {Boolean}
 * @author Mustafa Zeynel Dağlı
 * @since 15/06/2017
 */
window.updateSoruChoiceWrapper = function(event, id){
    
    if($('#editor').html()!==null) {
        if($('#tt_tree_soruchoice_popup').tree('getSelected') === null) {
            wm.warningMessage('resetOnShown');
            wm.warningMessage('show', 'Soru Şıkkı Seçiniz', 'Lütfen soru şıkkı  seçiniz!');
            return false;
        } 
        updateSoruChoice(id);  
        return false;
    } else {
        wm.warningMessage('resetOnShown');
        wm.warningMessage('show', 'Soru Şıkkı Yazınız', 'Lütfen soru şıkkı yazınız!');
        return false;
    }
    
    var editorText = $('#editor').trumbowyg('html');
    return false;
}


/**
 * wrapper class for pop up and delete question choice ultimately
 * @param {integer} nodeID
 * @returns {null}
 * @author Mustafa Zeynel Dağlı
 * @since 16/06/2017
 */
window.deleteSoruChoiceDialog= function(id, question_id){
    var id = id;
    console.log(id);
    console.log(question_id);
    wcm.warningComplexMessage({onConfirm : function(event, data) {
        deleteSoruChoice(id, question_id);
        return false;
    }
    });
    wcm.warningComplexMessage('show', 'Soru Silme İşlemi Gerçekleştirmek Üzeresiniz!', 
                                      'Soru silmek üzeresiniz, silme işlemi geri alınamaz!! ');
}

/**
 *  question choices are deleted
 * @param {type} nodeID
 * @param {type} nodeName
 * @returns {Boolean}
 * @author Mustafa Zeynel Dağlı
 * @since 16/06/2017
 */
window.deleteSoruChoice = function(id, question_id) {
    var loader = $("#loading-image-popup").loadImager();
    loader.loadImager('appendImage');

    var question_id = question_id;
    /*console.log(node);
    console.log(id);
    console.log(tagBuilder);*/

    var aj = $(window).ajaxCall({
         proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',   
         data : {
             url:'pkDelete_infoQuestionAnswers' ,
             id : id,
             pk : $("#pk").val()
         }
    })
    aj.ajaxCall ({  
          onError : function (event, textStatus, errorThrown) {   
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Şık Ekleme İşlemi Başarısız...', 
                                       'Şık ekleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ')
              console.error('"pkDelete_infoQuestionAnswers" servis hatası->'+textStatus);
          },
          onSuccess : function (event, data) {
            var data = data;                                                
            loader.loadImager('removeLoadImage');
            
            sm.successMessage('show', 'Şık Silma İşlemi Başarılı...', 
                                       'Şık silma İşlemini gerçekleştirdiniz... ',
                                       data);
            regulateButtonsSoruChoice();
            $('#tt_tree_soruchoice_popup').tree({
                url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=fillAnswerOfQuestionTree_infoQuestionAnswers&pk=' + $("#pk").val()+ '&question_id='+question_id});
            //$('#tt_tree_soruchoice_popup').tree('reload');

          },
          onErrorDataNull : function (event, data) {
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Şık Silma İşlemi Başarısız...', 
                                       'Şık silma işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
              console.error('"pkDelete_infoQuestionAnswers" servis datası boştur!!');
          },
          onErrorMessage : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Şık Silma İşlemi Başarısız...', 
                                     'Şık silma işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkDelete_infoQuestionAnswers" servis hatası->'+data);
          },
          onError23503 : function (event, data) {
          },
          onError23505 : function (event, data) {
              dm.dangerMessage({
                 onShown : function(event, data) {
                     //$('#machPropFormInsertPopup')[0].reset();
                     loader.loadImager('removeLoadImage');
                 }
              });
              dm.dangerMessage('show', 'Şık Silma İşlemi Başarısız...', 
                                       'Şık daha önce eklenmiştir, yeni bir şık deneyiniz... ');
          }
    }) 
    aj.ajaxCall('call');
}

 /*
* 
* @type @call;$@call;loadImager
* @Since 26/07/2016
* @Author Mustafa Zeynel Dagli
* @Purpose this variable is to create loader image for Zend Modules
*  dropdown. Loading image will be removed when dropdown filled data.
*/
$("#loading-image-time").loadImager();
$("#loading-image-time").loadImager('appendImage');

/**
 * loading image for roles dropdown
 * @author Mustafa Zeynel Dağlı
 * @since 11/08/2016
 */
$("#loading-image-diffuculties").loadImager();
$("#loading-image-diffuculties").loadImager('appendImage');

/**
 * loading image for resources dropdown
 * @author Mustafa Zeynel Dağlı
 * @since 03/07/2017
 */
$("#loading-image-resources").loadImager();
$("#loading-image-resources").loadImager('appendImage');


/**
 * dropdownTime prepared
 * @type @call;$@call;ajaxCallWidget
 * @since 13/06/2017
 */
var ajaxACLResources = $('#loading-image-time').ajaxCallWidget({
    proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
            data: { url:'fillQuestionTime_sysSpecificDefinitions' ,
                    //pk : $("#pk").val() 
            }
   })
ajaxACLResources.ajaxCallWidget ({
     onError : function (event, textStatus,errorThrown) {
         dm.dangerMessage({
            onShown : function() {
                $('#loading-image-time').loadImager('removeLoadImage'); 
            }
         });
         dm.dangerMessage('show', 'Zaman Verisi  Bulunamamıştır...',
                                  'Zaman verisi  bulunamamıştır...');
     },
     onSuccess : function (event, data) {
         var data = $.parseJSON(data);
         $('#loading-image-time').loadImager('removeLoadImage');
         $('#dropdownTime').ddslick({
            height : 200,
            data : data, 
            width:'98%',
            selectText: "Lütfen seçiniz",
            //showSelectedHTML : false,
            //defaultSelectedIndex: 3,
            search : false,
            //imagePosition:"right",
            onSelected: function(selectedData){
                if(selectedData.selectedData.value>0) {
                    /*$('#tt_tree_menu').tree({
                        url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=pkFillForAdminTree_leftnavigation&pk=' + $("#pk").val()+ '&role_id='+selectedData.selectedData.value+'&language_code='+$("#langCode").val(),
                    });*/
                }
            }   
        });   
     },
     onErrorDataNull : function (event, data) {
         dm.dangerMessage({
            onShown : function() {
                $('#loading-image-time').loadImager('removeLoadImage'); 
            }
         });
         dm.dangerMessage('show', 'Zaman Verisi Bulunamamıştır...',
                                  'Zaman verisi  bulunamamıştır...');
     },
}) 
ajaxACLResources.ajaxCallWidget('call');


/**
 * dropdownDiffuculty prepared
 * @type @call;$@call;ajaxCallWidget
 * @since 13/06/2017
 */
var ajaxACLResources = $('#loading-image-diffuculties').ajaxCallWidget({
    proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
            data: { url:'fillDifficulty_sysSpecificDefinitions' ,
                    pk : $("#pk").val() 
            }
   })
ajaxACLResources.ajaxCallWidget ({
     onError : function (event, textStatus,errorThrown) {
         dm.dangerMessage({
            onShown : function() {
                $('#loading-image-diffuculties').loadImager('removeLoadImage'); 
            }
         });
         dm.dangerMessage('show', 'Zorluk Derecesi Bulunamamıştır...',
                                  'Zorluk Derecesi  bulunamamıştır...');
     },
     onSuccess : function (event, data) {
         var data = $.parseJSON(data);
         $('#loading-image-diffuculties').loadImager('removeLoadImage');
         $('#dropdownDiffuculty').ddslick({
            height : 200,
            data : data, 
            width:'98%',
            selectText: "Lütfen seçiniz",
            //showSelectedHTML : false,
            //defaultSelectedIndex: 3,
            search : false,
            multiSelect : false,
            //tagBox : 'tag-container',
            //multiSelectTagID : 'deneme',
            //imagePosition:"right",
            onSelected: function(selectedData){
                if(selectedData.selectedData.value>0) {
                    /*$('#tt_tree_menu').tree({
                        url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=pkFillForAdminTree_leftnavigation&pk=' + $("#pk").val()+ '&role_id='+selectedData.selectedData.value+'&language_code='+$("#langCode").val(),
                    });*/
                }
            }   
        });   
     },
     onErrorDataNull : function (event, data) {
         dm.dangerMessage({
            onShown : function() {
                $('#loading-image-diffuculties').loadImager('removeLoadImage'); 
            }
         });
         dm.dangerMessage('show', 'Zorluk Derecesi Bulunamamıştır...',
                                  'Zorluk Derecesi bulunamamıştır...');
     },
}) 
ajaxACLResources.ajaxCallWidget('call');



/**
 * dropdownResource prepared
 * @type @call;$@call;ajaxCallWidget
 * @since 13/06/2017
 */
/*$('#dropdownResource').ddslick({
            height : 200,
            data : '{"text":"Lütfen seçiniz","value":0,"selected":true,"imageSrc":"","description":"Lütfen seçiniz"},{"text":"Geçmiş Sınav","value":1,"selected":false,"description":"Geçmiş Sınav"},{"text":"Admin Sorusu","value":2,"selected":false,"description":"Admin Sorusu"},{"text":"Soru Kitapçığı","value":3,"selected":false,"description":"Soru Kitapçığı"}', 
            width:'98%',
            selectText: "Lütfen seçiniz",
            //showSelectedHTML : false,
            //defaultSelectedIndex: 3,
            search : false,
            //imagePosition:"right",
            onSelected: function(selectedData){
                if(selectedData.selectedData.value>0) {
                    /*$('#tt_tree_menu').tree({
                        url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=pkFillForAdminTree_leftnavigation&pk=' + $("#pk").val()+ '&role_id='+selectedData.selectedData.value+'&language_code='+$("#langCode").val(),
                    });*/
                /*}
            }   
        });*/
var ajaxQuestionResources = $('#loading-image-resource').ajaxCallWidget({
    proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
            data: { url:'fillQuestionTime_sysSpecificDefinitions' ,
                    //pk : $("#pk").val() 
            }
   })
ajaxQuestionResources.ajaxCallWidget ({
     onError : function (event, textStatus,errorThrown) {
         dm.dangerMessage({
            onShown : function() {
                $('#loading-image-resource').loadImager('removeLoadImage'); 
            }
         });
         dm.dangerMessage('show', 'Soru Kaynak Verisi  Bulunamamıştır...',
                                  'Soru kaynak verisi  bulunamamıştır...');
     },
     onSuccess : function (event, data) {
         var data = $.parseJSON(data);
         $('#loading-image-resources').loadImager('removeLoadImage');
         $('#dropdownResource').ddslick({
            height : 200,
            data : data, 
            width:'98%',
            selectText: "Lütfen seçiniz",
            //showSelectedHTML : false,
            //defaultSelectedIndex: 3,
            search : false,
            //imagePosition:"right",
            onSelected: function(selectedData){
                if(selectedData.selectedData.value>0) {
                    /*$('#tt_tree_menu').tree({
                        url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=pkFillForAdminTree_leftnavigation&pk=' + $("#pk").val()+ '&role_id='+selectedData.selectedData.value+'&language_code='+$("#langCode").val(),
                    });*/
                }
            }   
        });   
     },
     onErrorDataNull : function (event, data) {
         dm.dangerMessage({
            onShown : function() {
                $('#loading-image-resource').loadImager('removeLoadImage'); 
            }
         });
         dm.dangerMessage('show', 'Soru Kaynak Verisi Bulunamamıştır...',
                                  'Soru kaynak verisi  bulunamamıştır...');
     },
}) 
ajaxQuestionResources.ajaxCallWidget('call');


/*
* 
* @type @call;$@call;tree
* Entities tree
* Mustafa Zeynel Dağlı
* 13/06/2017
*/

$('#tt_tree_menu').tree({
url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=fillCorporationsTree_sysCorporation&pk=' + $("#pk").val()+ '&language_code='+$("#langCode").val(),
method: 'get',
animate: true,
checkbox: false,
cascadeCheck: false,
lines: true,
onAfterEdit: function (node) {

    id = editNode.id;
    root = $(this).tree('getRoot', node.target);
    if (editNode.text === '') {

        testBlockuiRoleNameChangeNull.blockuiWrapper('option', 'fadeOut', 700);
        testBlockuiRoleNameChangeNull.blockuiWrapper('show');

        editNode.text = beforeEditTextValue;

        $('#tt_tree_menu').tree('update', {
            target: node.target,
            text: beforeEditTextValue
        });

    } else {

        testBlockuiRoleNameChangeApproval.blockuiApprovalWrapper('option', {
            showOverlay: true
        });
        testBlockuiRoleNameChangeApproval.blockuiApprovalWrapper('show');
        active = editNode.attributes.active;
    }
    },
 onLoadSuccess: function (node, data) {
     if(data.length>0) {
        loader.loadImager('removeLoadImage'); 
     }
 },
 onClick: function (node) {
     selectedNode = node;
     selectedRoot = $(this).tree('getRoot', node.target);
     selectedItem = $(this).tree('getData', node.target);
     //console.log(selectedItem);
     /*$('#kurum_name').val(selectedItem.text);
     $('#kurum_abbreviation').val(selectedItem.attributes.abbreviation);
     $('#description').val(selectedItem.attributes.description);
     $('#updateKurum').attr('disabled', false);
     $('#insertKurum').attr('disabled', true);*/

 },
 formatter: function (node) {
     var s = node.text;
     var id = node.id;
     if (node.attributes.active == 0) {
         s += '&nbsp;<i class="fa fa-fw fa-trash-o" title="menü sil" onclick="deleteKurumDialog('+id+')"></i>&nbsp;\n\
              <i class="fa fa-fw fa-ban" title="pasif yap" onclick="passiveKurumDialog('+id+');"></i>&nbsp;&nbsp;\n\
             <i class="fa fa-level-down" title="alt kırılıma menü ekle" onclick="insertKurumDialog('+id+', \''+node.text+'\')"></i>';
         return s;

     } else if (node.attributes.active == 1) {
         s += '&nbsp;<i class="fa fa-fw fa-trash-o" title="menü sil" onclick="deleteKurumDialog('+id+')"></i>&nbsp;\n\
         <i class="fa fa-fw fa-check-square-o" title="aktif yap" onclick="activeKurumDialog('+id+');"></i>';
         s = "<font color = '#B6B6B4'>" + s + "</font>"
         //buda koşullu kullanım için örnek satır    
         /*if (node.children) {
             s += '&nbsp;<a href=<span style=\'color:blue\'>(' + node.children.length + ')</span>';
         }*/
         return s;
     }
 }
});

/*
* 
* @type @call;$@call;loadImager
* @Since 2016.01.16
* @Author Mustafa Zeynel Dagli
* @Purpose this variable is to create loader image for roles tree 
* this imager goes to #loading-image div in html.
* imager will be removed on roles tree onLoadSuccess method.
*/
var loader = $("#loading-image").loadImager();
loader.loadImager('appendImage');

   
/*
* 
* @type @call;$@call;loadImager
* @Since 2016.01.16
* @Author Mustafa Zeynel Dagli
* @Purpose this variable is to create loader image for roles tree 
* this imager goes to #loading-image div in html.
* imager will be removed on roles tree onLoadSuccess method.
*/
var loaderKonu = $("#loading-image-konu").loadImager();
loaderKonu.loadImager('appendImage');

var selectedNode;  

/**
 * multilanguage plugin 
 * @type Lang
 */
var lang = new Lang();
lang.dynamic($('#ln').val(), '/plugins/jquery-lang-js-master/langpack/'+$('#ln').val()+'.json');
lang.init({
    defaultLang: 'en'
});
lang.change($('#ln').val());

/**
 * !! Important , do not delete
 * @type node
 */
var selectedNode;



var sm  = $(window).successMessage();
var dm  = $(window).dangerMessage();
var wm  = $(window).warningMessage();
var wcm = $(window).warningComplexMessage({ denyButtonLabel : 'Vazgeç' ,
                                           actionButtonLabel : 'İşleme devam et'});
                                            
/**
 * Zend Module-Action insert form validation engine attached to work
 * @since 26/07/2016
 */
$('#soruForm').validationEngine();

 /**
* reset button function for exam insert form
* @returns null
* @author Mustafa Zeynel Dağlı  
* @since 13/06/2017
*/
window.resetSoruForm = function () {
   $('#soruForm').validationEngine('hide');
   $('#soruForm')[0].reset();
   if($('#tt_tree_menu').tree('getSelected') !== null) {
        var node = $('#tt_tree_menu').tree('getSelected');
        $('#tt_tree_menu').tree('unselect', node.target);
        //$('#tt_tree_menu').tree('uncheck', node.target);
    }
    $('#dropdownTime').ddslick('selectByValue', 
                                                    {index: '0'}
                                                    );
    $('#dropdownDiffuculty').ddslick('selectByValue', 
                                                    {index: '0'}
                                                    );
   return false;
}

/**
* reset button function for exam insert form
* @returns null
* @author Mustafa Zeynel Dağlı  
* @since 13/06/2017
*/
window.resetSoruFormUpdate = function () {
   $('#soruFormPopup').validationEngine('hide');
   $('#soruFormPopup')[0].reset();
   if($('#tt_tree_menu_popup').tree('getSelected') !== null) {
        var node = $('#tt_tree_menu_popup').tree('getSelected');
        $('#tt_tree_menu_popup').tree('unselect', node.target);
        //$('#tt_tree_menu').tree('uncheck', node.target);
    }
    $('#dropdownDiffucultyPopup').ddslick('selectByValue', 
                                                    {index: '0'}
                                                    );
   return false;
}

// Left menuyu oluşturmak için çağırılan fonksiyon...
//$.fn.leftMenuFunction();

    
/**
 * wrapper class for pop up and delete exam ultimately
 * @param {integer} nodeID
 * @returns {null}
 * @author Mustafa Zeynel Dağlı
 * @since 13/06/2017
 */
window.deleteSinavUltimatelyDialog= function(id, index){
    var id = id;
    var index = index;
    wcm.warningComplexMessage({onConfirm : function(event, data) {
        deleteSinavUltimately(id, index);
    }
    });
    wcm.warningComplexMessage('show', 'Soru Silme İşlemi Gerçekleştirmek Üzeresiniz!', 
                                      'Soru silmek üzeresiniz, silme işlemi geri alınamaz!! ');
}
 
 /**
  * delete exam with related data upon user approval
  * @param {type} id
  * @param {type} index
  * @returns {undefined}
  * @author Mustafa Zeynel Dağlı
  * @since 13/06/2017
  */
 window.deleteSinavUltimatelyWithRelatedData = function (id, index) {
      var ajDeleteAllWithRelatedData = $(window).ajaxCall({
                proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
                data : {
                    url:'pkDeleteAct_sysAclActions' ,
                    id : id,
                    pk : $("#pk").val()
                }
    });
    ajDeleteAllWithRelatedData.ajaxCall ({
        onError : function (event, data) {  
            dm.dangerMessage('resetOnShown');  
            dm.dangerMessage('show', 'Soru  Silme İşlemi Başarısız...',
                                     'Soru  silinememiştir, sistem yöneticisi ile temasa geçiniz...');
            console.error('"pkDelete_sysAclActions" servis hatası->'+data.errorInfo);
        },
        onSuccess : function (event, data) {
            sm.successMessage({ 
                onShown : function() {
                    //console.warn(index);
                    $('#tt_grid_dynamic').datagrid('reload');
                }
            });
            sm.successMessage('show', 'Soru Silme İşleminiz Başarılı...',
                                      'Soru ilgili tüm datalarla beraber silinmiştir,  silme işleminiz başarılı...')
        }, 
       
    });
    ajDeleteAllWithRelatedData.ajaxCall('call');
 }
 
 
/**
* delete exam
* @param {type} id
* @param {type} element
* @param {type} machine_group_id
* @returns {undefined}
* @since 13/06/2017
*/
window.deleteSinavUltimately = function(id, index) {
   var loaderGridBlock = $("#loading-image-grid-container").loadImager();
    loaderGridBlock.loadImager('appendImage');

    var id = id;
    var index = index;
    var ajDeleteAll = $(window).ajaxCall({
                proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
                data : {
                    url:'pkDelete_sysAclActions' ,
                    id : id,
                    pk : $("#pk").val()
                }
    });
    ajDeleteAll.ajaxCall ({
        onError : function (event, data) {  
            dm.dangerMessage('resetOnShown');  
            dm.dangerMessage('show', 'Soru  Silme İşlemi Başarısız...',
                                     'Soru  silinememiştir, sistem yöneticisi ile temasa geçiniz...');
            console.error('"pkDelete_sysAclActions" servis hatası->'+data.errorInfo);
        },
        onSuccess : function (event, data) {
            sm.successMessage({ 
                onShown : function() {
                    //console.warn(index);
                    loaderGridBlock.loadImager('removeLoadImage');
                    $('#tt_grid_dynamic').datagrid('reload');
                }
            });
            sm.successMessage('show', 'Soru Silme İşleminiz Başarılı...',
                                      'Soru  silme işleminiz başarılı...')
        }, 
        onError23503 : function (event, data) {
            /*wcm.warningComplexMessage('resetOnShown');
            wcm.warningComplexMessage({onConfirm : function(event, data) {
                deleteSinavUltimatelyWithRelatedData(id, index);
            }
            });
            wcm.warningComplexMessage('show', 'Silme İşlemine Devam Etmek İstiyormusunuz?', 
                                              'Action  bağlı Menü Tipi tanımlandığı için silme işlemi bağlı veriyide etkileyecektir.\n\
                                  Yinede silme işlemine devam etmek istiyormusunuz? ');*/
            
            wm.warningMessage('resetOnShown');
            wm.warningMessage('show', 'Silme İşlemi Gerçekleştiremezsiniz!', 'Sınava soru tanımlandığı için silme işlemi\n\
                               gerçekleştiremezsiniz, önce sorular silinmelidir!');
            loaderGridBlock.loadImager('removeLoadImage');
        }
    });
    ajDeleteAll.ajaxCall('call');
}
   
 
/**
 * insert exam wrapper
 * @returns {Boolean}
 * @author Mustafa Zeynel Dağlı
 * @since 13/06/2017
 */
window.insertSinavWrapper = function (e) {
 e.preventDefault();

 if ($("#soruForm").validationEngine('validate')) {
     
    var ddData = $('#dropdownTime').data('ddslick');
    if(!ddData.selectedData.value > 0) {
         wm.warningMessage('resetOnShown');
         wm.warningMessage('show', 'Zaman Seçiniz', 'Lütfen zaman verisi seçiniz!');
         return false;
    }
     
    var ddData = $('#dropdownDiffuculty').data('ddslick');
    if(!ddData.selectedData.value > 0) {
         wm.warningMessage('resetOnShown');
         wm.warningMessage('show', 'Zorluk Derecesi Seçiniz', 'Lütfen zorluk derecesi seçiniz!');
         return false;
    }
    
    if($('#tt_tree_menu').tree('getSelected') === null) {
        wm.warningMessage('resetOnShown');
        wm.warningMessage('show', 'Kurum Seçiniz', 'Lütfen kurum  seçiniz!');
        return false;
    }
    

    insertSinav();
 }
 return false;
}
   
   
   
/**
 * wrapper for exam update process
 * @param {type} nodeID
 * @param {type} nodeName
 * @returns {Boolean}
 * @author Mustafa Zeynel Dağlı
 * @since 15/06/2017
 */
window.updateSoruDialog = function (id, row) {
    window.gridReloadController = false;
    console.log(row);
    BootstrapDialog.show({  
         title: '"'+ row.question + '" sorusunu güncellemektesiniz...',
         message: function (dialogRef) {
                     var dialogRef = dialogRef;
                     var $message = $(' <div class="row">\n\
                                             <div class="col-md-12">\n\
                                                 <div id="loading-image-crud-popup" class="box box-primary">\n\
                                                     <form id="soruFormPopup" method="get" class="form-horizontal">\n\
                                                     <input type="hidden" id="machine_tool_group_id_popup" name="machine_tool_group_id_popup"  />\n\
                                                     <div class="hr-line-dashed"></div>\n\
                                                        <div class="form-group" style="margin-top: 20px;">\n\
                                                             <label class="col-sm-2 control-label">Soru</label>\n\
                                                             <div class="col-sm-10">\n\
                                                                 <div class="input-group">\n\
                                                                     <div class="input-group-addon">\n\
                                                                         <i class="fa fa-hand-o-right"></i>\n\
                                                                     </div>\n\
                                                                     <div  class="tag-container-popup">\n\
                                                                         <input data-prompt-position="topLeft:70" class="form-control validate[required]" type="text" value="'+row.question+'" name="question_popup" id="question_popup" placeholder="Soru"   />\n\
                                                                     </div>\n\
                                                                 </div>\n\
                                                             </div>\n\
                                                         </div>\n\
                                                         <div class="form-group" style="margin-top: 20px;">\n\
                                                             <label class="col-sm-2 control-label">Soru Puanı</label>\n\
                                                             <div class="col-sm-10">\n\
                                                                 <div class="input-group">\n\
                                                                     <div class="input-group-addon">\n\
                                                                         <i class="fa fa-hand-o-right"></i>\n\
                                                                     </div>\n\
                                                                     <div  class="tag-container-popup">\n\
                                                                         <input data-prompt-position="topLeft:70" class="form-control validate[required]" type="text" value="'+row.point+'" name="point_popup" id="point_popup" placeholder="Soru puanı"   />\n\
                                                                     </div>\n\
                                                                 </div>\n\
                                                             </div>\n\
                                                         </div>\n\
                                                        <div class="form-group">\n\
                                                            <label class="col-sm-2 control-label">Soru Zamanı</label>\n\
                                                            <div class="col-sm-10">\n\
                                                                <div id="loading-image-diffuculties-popup" class="input-group">\n\
                                                                    <div class="input-group-addon">\n\
                                                                        <i class="fa fa-hand-o-right"></i>\n\
                                                                    </div>\n\
                                                                    <div id="dropdownTimePopup" ></div>\n\
                                                                </div>\n\
                                                            </div>\n\
                                                        </div>\n\
                                                        <div class="form-group">\n\
                                                            <label class="col-sm-2 control-label">Soru Zorluk Derecesi</label>\n\
                                                            <div class="col-sm-10">\n\
                                                                <div id="loading-image-diffuculties-popup" class="input-group">\n\
                                                                    <div class="input-group-addon">\n\
                                                                        <i class="fa fa-hand-o-right"></i>\n\
                                                                    </div>\n\
                                                                    <div id="dropdownDiffucultyPopup" ></div>\n\
                                                                </div>\n\
                                                            </div>\n\
                                                        </div>\n\
                                                         <div class="form-group">\n\
                                                             <label class="col-sm-2 control-label">Seçili Konular</label>\n\
                                                             <div id="loading-image-priority-popup" class="col-sm-10">\n\
                                                                 <div class="input-group" id="mach-prop-box">\n\
                                                                     <div class="input-group-addon">\n\
                                                                         <i class="fa fa-hand-o-right"></i>\n\
                                                                     </div>\n\
                                                                     <div style="margin-bottom: -10px;" class="tag-container">\n\
                                                                     <ul id="test-cabin" class="tag-box"></ul>\n\
                                                                     </div>\n\
                                                                 </div>\n\
                                                             </div>\n\
                                                         </div>\n\
                                                        <div class="form-group">\n\
                                                            <label class="col-sm-2 control-label">Konular</label>\n\
                                                            <div class="col-sm-10">\n\
                                                                <div id="loading-image-popup" class="input-group">\n\
                                                                    <div class="input-group-addon">\n\
                                                                        <i class="fa fa-hand-o-right"></i>\n\
                                                                    </div>\n\
                                                                    <div >\n\
                                                                        <ul id="tt_tree_konu_popup" class="easyui-tree" ></ul>\n\
                                                                    </div>\
                                                                </div>\n\
                                                            </div>\n\
                                                        </div>\n\
                                                        <div class="form-group" style="margin-top: 20px;">\n\
                                                             <label class="col-sm-2 control-label">Seçili Kurum</label>\n\
                                                             <div class="col-sm-10">\n\
                                                                 <div class="input-group">\n\
                                                                     <div class="input-group-addon">\n\
                                                                         <i class="fa fa-hand-o-right"></i>\n\
                                                                     </div>\n\
                                                                     <div  class="tag-container-popup">\n\
                                                                         <input data-prompt-position="topLeft:70" class="form-control validate[required]" type="text" value="'+row.corporation+'" attribute_corp_id="'+row.corporation_id+'" name="secili_kurum_popup" id="secili_kurum_popup" placeholder="Seçili kurum"   />\n\
                                                                     </div>\n\
                                                                 </div>\n\
                                                             </div>\n\
                                                         </div>\n\
                                                         <div class="form-group">\n\
                                                            <label class="col-sm-2 control-label">Kurumlar</label>\n\
                                                            <div class="col-sm-10">\n\
                                                                <div id="loading-image-popup" class="input-group">\n\
                                                                    <div class="input-group-addon">\n\
                                                                        <i class="fa fa-hand-o-right"></i>\n\
                                                                    </div>\n\
                                                                    <div >\n\
                                                                        <ul id="tt_tree_menu_popup" class="easyui-tree" ></ul>\n\
                                                                    </div>\
                                                                </div>\n\
                                                            </div>\n\
                                                        </div>\n\
                                                         <div class="form-group">\n\
                                                             <label class="col-sm-2 control-label">Açıklama</label>\n\
                                                             <div id="loading-image-priority-popup" class="col-sm-10">\n\
                                                                 <div class="input-group">\n\
                                                                     <div class="input-group-addon">\n\
                                                                         <i class="fa fa-hand-o-right"></i>\n\
                                                                     </div>\n\
                                                                     <textarea data-prompt-position="topLeft:70" class="form-control validate[required]" rows="3" name="description_popup" id="description_popup" placeholder="Açıklama ...">'+row.description+'</textarea>\n\
                                                                 </div>\n\
                                                             </div>\n\
                                                         </div>\n\
                                                         <div class="form-group">\n\
                                                             <label class="col-sm-2 control-label">Açıklama</label>\n\
                                                             <div id="loading-image-priority-popup" class="col-sm-10">\n\
                                                                 <div class="input-group">\n\
                                                                     <div class="input-group-addon">\n\
                                                                         <i class="fa fa-hand-o-right"></i>\n\
                                                                     </div>\n\
                                                                     <textarea data-prompt-position="topLeft:70" class="form-control " rows="3" name="source_popup" id="source_popup" placeholder="Soru kaynağı ...">'+row.source+'</textarea>\n\
                                                                 </div>\n\
                                                             </div>\n\
                                                         </div>\n\
                                                         <div class="hr-line-dashed"></div>\n\
                                                         <div class="form-group">\n\
                                                             <div class="col-sm-10 col-sm-offset-2">\n\
                                                             <button id="insertMachPopUp" class="btn btn-primary" type="submit" onclick="return updateSoruWrapper(event, '+id+');">\n\
                                                                 <i class="fa fa-save"></i> Güncelle </button>\n\
                                                         </div>\n\
                                                     </div>\n\
                                                 </form>\n\
                                             </div>\n\
                                         </div>\n\
                                     </div>');
                     return $message;
                 },
         type: BootstrapDialog.TYPE_PRIMARY,
         onshown : function () {         
            $('#soruFormPopup').validationEngine();
             
            $('#mach-prop-box').loadImager();
            $('#mach-prop-box').loadImager('appendImage'); 
            
            $("#loading-image-diffuculties-popup").loadImager();
            $("#loading-image-diffuculties-popup").loadImager('appendImage');
            
            $("#loading-image-popup").loadImager();
            $("#loading-image-popup").loadImager('appendImage');
            
            
            var tagBuilder = $('#test-cabin').tagCabin({
                tagCopy         : false,
                tagDeletable    : true,
                tagDeletableAll : false, 
                tagBox          : $('.tag-container').find('ul'),
                dataMapper      : {attributes : Array('qs_id', 'subject_id')}

            }); 
            tagBuilder.tagCabin({
                onTagRemoved : function(event, data) {
                    var self = $(this);
                    var elementData = data.element;
                    window.deleteSoruKonu(elementData);
                }
            });
            
            if(tagBuilder.tagCabin('findSpecificTags', 1, 'data-role_id')) {
                var ajaxMacProp = $('#test-cabin').ajaxCallWidget({
                    proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
                            data : {
                                url:'fillSubjectOfQuestion_infoQuestionsSubjects' ,
                                id : id,
                            }
                   })
                ajaxMacProp.ajaxCallWidget ({
                     onError : function (event, textStatus,errorThrown) {
                         dm.dangerMessage({
                            onShown : function() {
                                $('#mach-prop-box').loadImager('removeLoadImage'); 
                                //treeObj.tree('uncheck', node.target);
                            }
                         });
                         dm.dangerMessage('show', 'Soru Bağlantılı Konular Bulunamamıştır...',
                                                  'Soru bağlantılı konular bulunamamıştır, bir hata olduğunu düşünüyorsanız sistem yöneticiniz ile temasa geçiniz...');
                     },
                     onSuccess : function (event, data) {
                         tagBuilder.tagCabin(
                            {tagsFound :function(event, item) { 
                            }  
                         });
                         tagBuilder.tagCabin(
                            {onTagRemovedUltimately :function(event, data) {
                                var element = data.element;
                                var id = data.id;
                                var role_id = element.attr('data-role_id');

                                window.deleteRolePrivilegeUltimatelyDialog(id, element, role_id);
                                return false;
                            }
                         });
                         //console.log(data);
                         tagBuilder.tagCabin('addTags', data);
                         $('#mach-prop-box').loadImager('removeLoadImage');

                     },
                     onErrorDataNull : function (event, data) {
                         dm.dangerMessage({
                            onShown : function() {
                                $('#mach-prop-box').loadImager('removeLoadImage'); 
                                //treeObj.tree('uncheck', node.target);
                            }
                         });
                         dm.dangerMessage('show', 'Soru Bağlantılı Kurumlar Bulunamamıştır...',
                                                  'Soru bağlantılı kurumlar  bulunamamıştır...');
                         $('#mach-prop-box').loadImager('removeLoadImage');
                     },
               }) 
               ajaxMacProp.ajaxCallWidget('call');
            } else {
                wm.warningMessage('resetOnShown');
                wm.warningMessage('show', 'Soru konuları Seçilmiştir!!!'
                                        , 'Soru konuları yüklenmiş durumdadır...');
                $('#mach-prop-box').loadImager('removeLoadImage');
            }

            
        var ajaxdiffucultyPopup = $('#loading-image-diffuculties').ajaxCallWidget({
            proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
                    data: { url:'fillDifficulty_sysSpecificDefinitions' ,
                            pk : $("#pk").val() 
                    }
           })
        ajaxdiffucultyPopup.ajaxCallWidget ({
             onError : function (event, textStatus,errorThrown) {
                 dm.dangerMessage({
                    onShown : function() {
                        $('#loading-image-diffuculties-popup').loadImager('removeLoadImage'); 
                    }
                 });
                 dm.dangerMessage('show', 'Zorluk Derecesi Bulunamamıştır...',
                                          'Zorluk Derecesi  bulunamamıştır...');
             },
             onSuccess : function (event, data) {
                 var data = $.parseJSON(data);
                 $('#lloading-image-diffuculties-popup').loadImager('removeLoadImage');
                 $('#dropdownDiffucultyPopup').ddslick({
                    height : 200,
                    data : data, 
                    width:'98%',
                    selectText: "Lütfen seçiniz",
                    //showSelectedHTML : false,
                    //defaultSelectedIndex: 3,
                    search : false,
                    multiSelect : false,
                    //tagBox : 'tag-container',
                    //multiSelectTagID : 'deneme',
                    //imagePosition:"right",
                    onSelected: function(selectedData){
                        if(selectedData.selectedData.value>0) {
                            /*$('#tt_tree_menu').tree({
                                url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=pkFillForAdminTree_leftnavigation&pk=' + $("#pk").val()+ '&role_id='+selectedData.selectedData.value+'&language_code='+$("#langCode").val(),
                            });*/
                        }
                    }   
                });  
                $('#dropdownDiffucultyPopup').ddslick('selectByValue', 
                                                    {index: ''+row.difficulty_id+''}
                                                    );  
             },
             onErrorDataNull : function (event, data) {
                 dm.dangerMessage({
                    onShown : function() {
                        $('#loading-image-diffuculties-popup').loadImager('removeLoadImage'); 
                    }
                 });
                 dm.dangerMessage('show', 'Zorluk Derecesi Bulunamamıştır...',
                                          'Zorluk Derecesi bulunamamıştır...');
             },
        }) 
        ajaxdiffucultyPopup.ajaxCallWidget('call');
            
            
        var ajaxTimePopup = $('#loading-image-diffuculties-popup').ajaxCallWidget({
            proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
                    data: { url:'fillQuestionTime_sysSpecificDefinitions' ,
                            pk : $("#pk").val() 
                    }
       })
       
        ajaxTimePopup.ajaxCallWidget ({
            onError : function (event, textStatus,errorThrown) {
                dm.dangerMessage({
                   onShown : function() {
                       //$('#loading-image-priority').loadImager('removeLoadImage'); 
                   }
                });
                dm.dangerMessage('show', 'Zorluk Derecesi Bulunamamıştır...',
                                         'Zorluk derecesi bulunamamıştır...');
            },
            onSuccess : function (event, data) {
                var data = $.parseJSON(data);
                    $('#loading-image-diffuculties-popup').loadImager('removeLoadImage');
                    $('#dropdownTimePopup').ddslick({
                            height : 200,
                            data : data, 
                            width:'98%',
                            search : false,
                            multiSelect : false,
                            //multiSelectTagID : 'rolesTag',
                            tagBox : 'tag-container-pop',
                            //imagePosition:"right",
                            onSelected: function(selectedData){
                                if(selectedData.selectedData.value>0) {
                             }
                         }   
                    }); 
                    $('#dropdownTimePopup').ddslick('selectByValue', 
                                                    {index: ''+row.required_time+''}
                                                    );
                    //ddData = $('#dropdownTimePopup').data('ddslick');
                    //var resources ='[{"id" : "23", "text" : "test"}, {"id" :"34", "text" : "test2"}]';
                    /*var multiSelectTagID = $('#dropdownPriorityPopup').ddslick('getMultiSelectTagID');
                    var tagBox = $('#dropdownPriorityPopup').ddslick('getTagBox');
                    $('#dropdownPriorityPopup').ddslick('selectByMultiValues', 
                                                {
                                                id : multiSelectTagID,
                                                tagBox : ''+tagBox+''},
                                                 data,
                                                 row.role_ids
                                                );*/
                },
                onErrorDataNull : function (event, data) {
                     dm.dangerMessage({
                        onShown : function() {
                            //$('#loading-image-priority-popup').loadImager('removeLoadImage'); 
                        }
                     });
                     dm.dangerMessage('show', 'Zorluk Derecesi Bulunamamıştır...',
                                              'Zorluk derecesi bulunamamıştır...');
                 },
            }) 
        ajaxTimePopup.ajaxCallWidget('call');
            
        $('#tt_tree_menu_popup').tree({
            url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=fillCorporationsTree_sysCorporation&pk=' + $("#pk").val()+ '&language_code='+$("#langCode").val(),
            method: 'get',
            animate: true,
            checkbox: false,
            cascadeCheck: false,
            lines: true,
            onAfterEdit: function (node) {

            },
            onLoadSuccess: function (node, data) {
                if(data.length>0) {
                    $("#loading-image-popup").loadImager('removeLoadImage');
                }
            },
            onClick: function (node) {
                selectedNode = node;
                selectedRoot = $(this).tree('getRoot', node.target);
                selectedItem = $(this).tree('getData', node.target);
                //console.log(selectedItem);
                /*$('#kurum_name').val(selectedItem.text);
                $('#kurum_abbreviation').val(selectedItem.attributes.abbreviation);
                $('#description').val(selectedItem.attributes.description);
                $('#updateKurum').attr('disabled', false);
                $('#insertKurum').attr('disabled', true);*/

            },
            onSelect: function(node){
                $("#secili_kurum_popup").val(node.text);
                $("#secili_kurum_popup").attr("attribute_corp_id", node.id);
            },
           });
           
        $('#tt_tree_konu_popup').tree({
            url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=fillSubjectsTree_sysSubjects&pk=' + $("#pk").val()+ '&language_code='+$("#langCode").val(),
            method: 'get',
            animate: true,
            checkbox: false,
            cascadeCheck: false,
            lines: true,
            onAfterEdit: function (node) {
            },
            onLoadSuccess: function (node, data) {
                if(data.length>0) {
                    $("#loading-image-popup").loadImager('removeLoadImage');
                }
            },
            onSelect: function(node){
                addSoruKonu(id,node,tagBuilder);
            },
            onClick: function (node) {
            },
            
           });
            
            
         },
         onhide : function() {
             if(window.gridReloadController == true) {
                 $('#tt_grid_dynamic').datagrid('reload');
             }

         },
     });
     return false;
}

/**
 * update question wrapper
 * @returns {Boolean}
 * @author Mustafa Zeynel Dağlı
 * @since 13/06/2017
 */
window.updateSoruWrapper = function (e, id) {
 e.preventDefault();
 var id = id;
 if ($("#soruFormPopup").validationEngine('validate')) {
     
    var ddData = $('#dropdownDiffucultyPopup').data('ddslick');
    if(!ddData.selectedData.value>0) {
        wm.warningMessage('resetOnShown');
        wm.warningMessage('show', 'Zorluk derecesi Seçiniz', 'Lütfen zorluk derecesi seçiniz!');
        return false;
    }
    
    var ddData = $('#dropdownTimePopup').data('ddslick');
    if(!ddData.selectedData.value>0) {
        wm.warningMessage('resetOnShown');
        wm.warningMessage('show', 'Zorluk derecesi Seçiniz', 'Lütfen zorluk derecesi seçiniz!');
        return false;
    }
    
     if($("#secili_kurum").attr("attribute_corp_id")===null || $("#secili_kurum").attr("attribute_corp_id")<=0) {
        wm.warningMessage('resetOnShown');
        wm.warningMessage('show', 'Kurum', 'Lütfen kurum  seçiniz!');
        return false;
    }
    
    alert('test');
    updateSoru(id);
    return false;
 }
 return false;
}

window.updateSoruAct = function (id,role_ids, module_id) {
    var ajUpdateACT = $(window).ajaxCall({
                     proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
                     data : {
                         url:'pkUpdateAct_sysAclActions' ,
                         id : id,
                         name : $('#name_popup').val(),
                         description : $('#description_popup').val(),
                         priority : module_id,
                         role_ids : role_ids,
                         pk : $("#pk").val()
                     }
    })
    ajUpdateACT.ajaxCall ({
          onError : function (event, textStatus, errorThrown) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Soru Güncelleme İşlemi Başarısız...', 
                                      'Soru güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkUpdate_sysAclActions" servis hatası->'+textStatus);
          },
          onSuccess : function (event, data) {
             var data = data;
             sm.successMessage({
                 onShown: function( event, data ) {
                     loader.loadImager('removeLoadImage');
                 }
             });
             sm.successMessage('show', 'Soru Güncelleme İşlemi Başarılı...', 
                                       'Soru güncelleme işlemini gerçekleştirdiniz... ',
                                       data);
             window.gridReloadController = true;
          },
          onErrorDataNull : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Soru Güncelleme İşlemi Başarısız...', 
                                      'Soru güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkUpdate_sysAclActions" servis datası boştur!!');
          },
          onErrorMessage : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Soru Güncelleme İşlemi Başarısız...', 
                                      'Soru güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
          },
          onError23503 : function (event, data) {
             
            },
          onError23505 : function (event, data) {
          }
    }) 
    ajUpdateACT.ajaxCall('call');
}


/**
 * delete topic from a specific question
 * @param {type} id
 * @param {type} element
 * @param {type} machine_group_id
 * @returns {undefined}
 * @since 15/06/2017
 */
window.deleteSoruKonu = function(tag) {
    var loader = $("#mach-prop-box").loadImager();
    loader.loadImager('appendImage');
    
    var qs_id = tag.attr('data-qs_id');

    var ajPopUpDelete = $(window).ajaxCall({
                     proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
                     data : {
                         url:'pkDeleteAction_infoQuestionsSubjects' ,
                         qs_id : qs_id,
                         pk : $("#pk").val()
                     }
    });
    ajPopUpDelete.ajaxCall ({
             onError : function (event, textStatus, errorThrown) {  
                 dm.dangerMessage('resetOnShown');  
                 dm.dangerMessage('show', 'Konu Silme İşlemi Başarısız...',
                                           'Konu silinememiştir, sistem yöneticisi ile temasa geçiniz...');
                 console.error('"pkDelete_sysAclRrp" servis hatası->'+textStatus);
             },
             onSuccess : function (event, data) {                                               
                loader.loadImager('removeLoadImage');
                tag.remove();
                sm.successMessage('show', 'Konu Silme İşleminiz Başarılı...',
                                           'Konu silme işleminiz başarılı...')
             },                                   
     });
     ajPopUpDelete.ajaxCall('call');
}


/**
 * add topic to question
 * @param {type} nodeID
 * @param {type} nodeName
 * @returns {undefined}
 * @author Mustafa Zeynel Dağlı
 * @since 15/06/2017
 */
window.addSoruKonu = function (id, node, tagBuilder) {
    var tagBuilder = tagBuilder;
    var loader = $("#mach-prop-box").loadImager();
    loader.loadImager('appendImage');
    
    /*console.log(node);
    console.log(id);
    console.log(tagBuilder);*/

    var aj = $(window).ajaxCall({
         proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',   
         data : {
             url:'pkTransferSubjectOfQuestion_infoQuestionsSubjects' ,
             questions_id : id,
             subject_id : node.id,
             pk : $("#pk").val()
         }
    })
    aj.ajaxCall ({  
          onError : function (event, textStatus, errorThrown) {   
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Konu Ekleme İşlemi Başarısız...', 
                                       'Konu ekleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ')
              console.error('"pkTransferSubjectOfQuestion_infoQuestionsSubjects" servis hatası->'+textStatus);
          },
          onSuccess : function (event, data) {
              var data = data;
              //var id = data.lastInsertId;
              //console.log(data.lastInsertId);  
             tagBuilder.tagCabin('addTagManuallyDataAttr', id, 
                                                            node.text,
                                                            {gs_id : data.lastInsertId,
                                                             subject_id : node.id,}
                                                             );
            //tag.remove();                                               
            loader.loadImager('removeLoadImage');
            
             sm.successMessage('show', 'Konu Ekleme İşlemi Başarılı...', 
                                       'Konu ekleme İşlemini gerçekleştirdiniz... ',
                                       data);

          },
          onErrorDataNull : function (event, data) {
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Konu Ekleme İşlemi Başarısız...', 
                                       'Konu Eekleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
              console.error('"pkTransferSubjectOfQuestion_infoQuestionsSubjects" servis datası boştur!!');
          },
          onErrorMessage : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Konu Ekleme İşlemi Başarısız...', 
                                     'Konu ekleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkTransferSubjectOfQuestion_infoQuestionsSubjects" servis hatası->'+textStatus);
          },
          onError23503 : function (event, data) {
          },
          onError23505 : function (event, data) {
              dm.dangerMessage({
                 onShown : function(event, data) {
                     //$('#machPropFormInsertPopup')[0].reset();
                     loader.loadImager('removeLoadImage');
                 }
              });
              dm.dangerMessage('show', 'Konu Ekleme İşlemi Başarısız...', 
                                       'Konu daha önce eklenmiştir, yeni bir yetki deneyiniz... ');
          }
    }) 
    aj.ajaxCall('call');
}

/**
 * update question
 * @returns {undefined}
 * @author Mustafa Zeynel Dağlı
 * @since 15/06/2017
 */
window.updateSoru = function (id) {
     var loader = $('#loading-image-crud-popup').loadImager();
     loader.loadImager('appendImage');
     
     var ddData = $('#dropdownDiffucultyPopup').data('ddslick');
     var difficulty_id = ddData.selectedData.value;
     
     var ddData = $('#dropdownTimePopup').data('ddslick');
     var required_time = ddData.selectedData.value;
     
     var point = $('#pointPopup').val();
     var corporation_id = $("#secili_kurum_popup").attr("attribute_corp_id");
     var source = $('#source_Popup').val();
     var description = $('#description_popup').val();
     var question = $('#question_popup').val();
     
     /*var tagCabinValues = $('#test-cabin').tagCabin('getAllTagsValues');
     console.log(tagCabinValues);*/
     
     var aj = $(window).ajaxCall({
                     proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
                     data : {
                         url:'pkUpdate_infoQuestions' ,
                         id : id,
                         question : question,
                         description : description,
                         difficulty_id : difficulty_id,
                         required_time : required_time,
                         point : point,
                         corporation_id : corporation_id,
                         source : source,
                         pk : $("#pk").val()
                     }
    })
    aj.ajaxCall ({
          onError : function (event, textStatus, errorThrown) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Soru Güncelleme İşlemi Başarısız...', 
                                      'Soru güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkUpdate_infoQuestions" servis hatası->'+textStatus);
          },
          onSuccess : function (event, data) {
             var data = data;
             sm.successMessage({
                 onShown: function( event, data ) {
                     loader.loadImager('removeLoadImage');
                 }
             });
             sm.successMessage('show', 'Soru Güncelleme İşlemi Başarılı...', 
                                       'Soru güncelleme işlemini gerçekleştirdiniz... ',
                                       data);
             window.gridReloadController = true;
          },
          onErrorDataNull : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Soru Güncelleme İşlemi Başarısız...', 
                                      'Soru güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkUpdate_infoQuestions" servis datası boştur!!');
          },
          onErrorMessage : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Soru Güncelleme İşlemi Başarısız...', 
                                      'Soru güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
          },
          onError23503 : function (event, data) {
              if(data.errorInfoColumn == 'haveRecordsActionPrivilegRestServices') {
                  wm.warningMessage('resetOnShown');
                  wm.warningMessage('show', 'Silme İşlemi Gerçekleştiremezsiniz!', 'Action  bağlı servis tanımlandığı için silme işlemi\n\
                                   gerçekleştiremezsiniz, önce Action / Servis  ilişkisi silinmelidir!');
                  loader.loadImager('removeLoadImage');
              } else if(data.errorInfoColumn == 'haveRecordsAclPrivileg') {
                  wcm.warningComplexMessage({onConfirm : function(event, data) {
                        loader.loadImager('removeLoadImage');
                        window.updateSoruAct(id, role_ids, module_id);
                  }
                  });
                  wcm.warningComplexMessage({onGiveup : function(event, data) {
                        loader.loadImager('removeLoadImage');
                  }
                  });
                  wcm.warningComplexMessage('show', 'Action Bağlı Yetkiler Bulunmaktadır!', 
                                                    'Action Bağlı Yetkiler Bulunmaktadır, güncelleme işlemi ile bu yetkilerde güncellenecektir, güncelleme işlemine devam etmek istediğinize emin misiniz? ');
                              }
                
        },
          onError23505 : function (event, data) {
          }
    }) 
    aj.ajaxCall('call');
}
   
/**
 * insert exam
 * @returns {undefined}
 * @author Mustafa Zeynel Dağlı
 * @since 13/06/2016
 */
window.insertSinav = function () {
     var loaderInsertBlock = $("#loading-image-crud").loadImager();
     loaderInsertBlock.loadImager('appendImage');
     
     var ddData = $('#dropdownDiffuculty').data('ddslick');
     var difficulty_id = ddData.selectedData.value;
     
     var ddData = $('#dropdownTime').data('ddslick');
     var required_time = ddData.selectedData.value;
     
     var point = $('#point').val();
     var node = $('#tt_tree_menu').tree('getSelected');
     var corporation_id = node.id;
     var source = $('#source').val();
     var description = $('#description').val();
     var question = $('#question').val();
     
     var aj = $(window).ajaxCall({
                     proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',   
                     data : {
                         url:'pkInsert_infoQuestions' ,
                         question : question,
                         description : description,
                         difficulty_id : difficulty_id,
                         required_time : required_time,
                         point : point,
                         corporation_id : corporation_id,
                         source : source,
                         pk : $("#pk").val()
                     }
    })
    aj.ajaxCall ({  
          onError : function (event, textStatus, errorThrown) {   
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Soru  Ekleme İşlemi Başarısız...', 
                                       'Soru ekleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ')
              console.error('"pkInsert_infoQuestions" servis hatası->'+textStatus);
          },
          onSuccess : function (event, data) {
              console.log(data);
              var data = data;
             sm.successMessage({
                 onShown: function( event, data ) {
                    resetSoruForm();

                     loaderInsertBlock.loadImager('removeLoadImage');
                     $('#tt_grid_dynamic').datagrid({
                         queryParams: {
                                 pk: $('#pk').val(),
                                 subject: 'datagrid',
                                 url : 'fillAllQuestionLists_infoQuestions',
                                 sort : 'id',
                                 order : 'desc',
                         },
                     });
                     $('#tt_grid_dynamic').datagrid('enableFilter');
                     $('#tt_grid_dynamic').datagrid('reload');
                 }
             });
             sm.successMessage('show', 'Soru Kayıt İşlemi Başarılı...', 
                                       'Soru kayıt işlemini gerçekleştirdiniz... ',
                                       data);

          },
          onErrorDataNull : function (event, data) {
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Soru Kayıt İşlemi Başarısız...', 
                                       'Soru  kayıt işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
              console.error('"pkInsert_infoQuestions" servis datası boştur!!');
          },
          onErrorMessage : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Soru  Kayıt İşlemi Başarısız...', 
                                     'Soru  kayıt işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkInsert_infoQuestions" servis hatası->'+data.errorInfo);
          },
          onError23505 : function (event, data) {
              dm.dangerMessage({
                 onShown : function(event, data) {
                    resetSoruForm();
                    loaderInsertBlock.loadImager('removeLoadImage');
                 }
              });
              dm.dangerMessage('show', 'Soru Kayıt İşlemi Başarısız...', 
                                       'Aynı isim ile soru  kaydı yapılmıştır, yeni bir soru deneyiniz... ');
          }
    }) 
    aj.ajaxCall('call');
}
   

/**
 * active/passive question wrapper
 * @returns {Boolean}
 * @author Mustafa Zeynel Dağlı
 * @since 15/06/2017
 */
window.activePassiveSoruWrapper = function (e, id) {
 e.preventDefault();
 var id = id;
 var domElement = e.target;
 wcm.warningComplexMessage({onConfirm : function(event, data) {
        activePassiveSoru(id, domElement);
    }
    });
wcm.warningComplexMessage('show', 'Soru Aktif/Pasif İşlemi Gerçekleştirmek Üzeresiniz!', 
                                  'Soru aktif/pasif işlemi gerçekleştirmek  üzeresiniz...');
 return false;
}

/**
 * active or passive question
 * @returns {undefined}
 * @author Mustafa Zeynel Dağlı
 * @since 15/06/2017
 */
window.activePassiveSoru = function (id, domElement) {
    var loader = $("#loading-image-grid-container").loadImager();
    loader.loadImager('appendImage');
    var id = id;
    //console.log(domElement);

    var aj = $(window).ajaxCall({
                     proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
                     data : {
                         url:'pkUpdateMakeActiveOrPassive_infoQuestions' ,
                         id : id,
                         pk : $("#pk").val()
                     }
    })
    aj.ajaxCall ({
          onError : function (event, textStatus, errorThrown) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Soru Aktif/Pasif İşlemi Başarısız...', 
                                      'Soru aktif/pasif işlemi, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkUpdateMakeActiveOrPassive_infoQuestions" servis hatası->'+textStatus);
          },
          onSuccess : function (event, data) {
             var data = data;
             sm.successMessage({
                 onShown: function( event, data ) {
                     loader.loadImager('removeLoadImage');
                 }
             });
             sm.successMessage('show', 'Soru Aktif/Pasif İşlemi Başarılı...', 
                                       'Soru aktif/pasif işlemini gerçekleştirdiniz... ',
                                       data);
            if($(domElement).hasClass("fa-minus-circle")){
                $(domElement).removeClass("fa-minus-circle");
                $(domElement).addClass("fa-plus-circle");
                
                $(domElement).parent().removeClass("btn-primary");
                $(domElement).parent().addClass("btn-warning");
            } else if($(domElement).hasClass("fa-plus-circle" )) {
                $(domElement).removeClass("fa-plus-circle");
                $(domElement).addClass("fa-minus-circle");
                
                $(domElement).parent().removeClass("btn-warning");
                $(domElement).parent().addClass("btn-primary");
            }
                
                
          },
          onErrorDataNull : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Soru Aktif/Pasif İşlemi Başarısız...', 
                                      'Soru aktif/pasif işlemi güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkUpdateMakeActiveOrPassive_infoQuestions" servis datası boştur!!');
          },
          onErrorMessage : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Soru Aktif/Pasif İşlemi Başarısız...', 
                                      'Soru aktif/pasif işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
          },
          onError23503 : function (event, data) {
          },
          onError23505 : function (event, data) {
          }
    }) 
    aj.ajaxCall('call');
}

   
   
   
});
