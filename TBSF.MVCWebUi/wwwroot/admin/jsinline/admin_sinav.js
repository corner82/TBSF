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
 * wrapper for exam/question update process
 * @param {type} nodeID
 * @param {type} nodeName
 * @returns {Boolean}
 * @author Mustafa Zeynel Dağlı
 * @since 15/06/2017
 */
window.updateSinavSoruDialog = function (id, row) {
    window.gridReloadController = false;
    //console.log(row);
    BootstrapDialog.show({  
        
         title: '"'+ row.name + '" sınavının sorularını güncellemektesiniz...',
         message: function (dialogRef) {
                     var dialogRef = dialogRef;
                     var $message = $(' <div class="row">\n\
                                             <div class="col-md-12">\n\
                                                 <div id="loading-image-crud-popup" class="box box-primary">\n\
                                                     <form id="soruSıkPopup" method="get" class="form-horizontal">\n\
                                                     <input type="hidden" id="machine_tool_group_id_popup" name="machine_tool_group_id_popup"  />\n\
                                                     <div class="hr-line-dashed"></div>\n\
                                                         <div class="form-group" style="margin-top: 20px">\n\
                                                            <label class="col-sm-2 control-label">Sorular</label>\n\
                                                            <div class="col-sm-10">\n\
                                                                <div id="loading-image-diffuculties-popup" class="input-group">\n\
                                                                    <div class="input-group-addon">\n\
                                                                        <i class="fa fa-hand-o-right"></i>\n\
                                                                    </div>\n\
                                                                    <div id="loading-image-popup">\n\
                                                                        <ul id="tt_tree_sinavsoru_popup" class="easyui-tree" ></ul>\n\
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
                                                                    <table  id="tt_grid_sinavsoru" title="Sorular  " ></table> \n\
                                                                </div>\n\
                                                            </div>\n\
                                                        </div>\n\
                                                         <div class="hr-line-dashed"></div>\n\
                                                         <div class="form-group">\n\
                                                             <div class="col-sm-10 col-sm-offset-2">\n\
                                                             <!--<button id="addSinavSoru" class="btn btn-primary" type="submit" onclick="return addSinavSoruWrapper(event, '+id+');">\n\
                                                                 <i class="fa fa-save"></i> Kaydet </button>-->\n\
                                                             <!--<button id="updateSinavSoru" class="btn btn-flat" type="submit" onclick="return updateSinavSoruWrapper(event, '+id+');" disabled><i class="fa fa-gears"></i> Güncelle </button>-->\n\
                                                             <!--<button id="resetForm" class="btn btn-flat" type="reset" onclick="regulateButtonsSoruChoice();" ><i class="fa fa-remove"></i> Reset </button>-->\n\
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
            //$('#editor').trumbowyg();

            $('#soruFormPopup').validationEngine();


            $("#loading-image-popup").loadImager();
            $("#loading-image-popup").loadImager('appendImage');

            $('#tt_tree_sinavsoru_popup').tree({
                url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=fillQuestionOfExamTree_infoExamQuestion&pk=' + $("#pk").val()+ '&exam_id='+id,
                method: 'get',
                animate: true,
                checkbox: false,
                multicheck : false,
                cascadeCheck: false,
                lines: true,
                dnd : true,
                onAfterEdit: function (node) {

                },
                onCheck : function(node, checked){
                    if(checked) {
                        wcm.warningComplexMessage({onConfirm : function(event, data) {
                            //addSinavSoru(id, index);  
                        }
                        });
                        wcm.warningComplexMessage({onGiveup : function(event, data) {
                            //addSinavSoru(id, index);
                            //alert('gave up');
                            $('#tt_tree_sinavsoru_popup').tree('uncheck', node.target);
                        }
                        });
                        wcm.warningComplexMessage('show', 'Soru Doğru Cevap Olarak işaretlenecektir !', 
                                                          'Soru Doğru Cevap Olarak işaretlenecektir, devam etmek istiyor musunuz!! ');
                    }
                    
                },
                onLoadSuccess: function (node, data) {
                    if(data.length>0) {
                        $("#loading-image-popup").loadImager('removeLoadImage');
                    }else {
                        wm.warningMessage('resetOnShown');
                        wm.warningMessage('show', 'Sınava Ait Soru Bulunmamaktadır', 'Sınava henüz soru eklenmemiştir!');
                        $("#loading-image-popup").loadImager('removeLoadImage');
                    }
                },
                onSelect: function (node) {
                    //$('#kurum_name').val(selectedItem.text);
                    //$('#kurum_abbreviation').val(selectedItem.attributes.abbreviation);
                    $("#textarea").html('test');
                    $('#updateSinavSoru').attr('disabled', false);
                    $('#addSinavSoru').attr('disabled', true);
                    //$('#editor').trumbowyg('html', "<p>Your content here</p>");

                    $('#editor').html(node.text);

                },
                formatter: function (node) {
                    var s = node.text;
                    var id = node.id;
                    s += '&nbsp;<i class="fa fa-fw fa-trash-o" title="menü sil" onclick="deleteSinavSoruDialog('+id+')"></i>&nbsp;';
                    return s;
                }
               });
               
           $('#tt_grid_sinavsoru').datagrid({
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


                               var u = '<button style="padding : 2px 4px;" title="Güncelle"  class="btn btn-info" type="button" onclick="return addSinavDialog('+id+','+row.id+');"><i class="fa fa-arrow-circle-up"></i></button>';
                               
                               return u;      
                           }
                       },
                   ]]   
           });
           $('#tt_grid_sinavsoru').datagrid('enableFilter');


         },
         onhide : function() {
         },
     });
     return false;
}

/**
 * wrapper class for pop up and delete exam ultimately
 * @param {integer} nodeID
 * @returns {null}
 * @author Mustafa Zeynel Dağlı
 * @since 13/06/2017
 */
window.addSinavDialog= function(exam_id, question_id){
    var question_id = question_id;
    var exam_id = exam_id;
    wcm.warningComplexMessage({onConfirm : function(event, data) {
        addSinavSoru(exam_id, question_id);
    }
    });
    wcm.warningComplexMessage('show', 'Soru Ekleme İşlemi Gerçekleştirmek Üzeresiniz!', 
                                      'İlgili soru sınava eklenecektir!! ');
}

/**
 *  question choices are inserted
 * @param {type} nodeID
 * @param {type} nodeName
 * @returns {Boolean}
 * @author Mustafa Zeynel Dağlı
 * @since 15/06/2017
 */
window.addSinavSoru = function(exam_id, question_id) {
    var loader = $("#loading-image-popup").loadImager();
    loader.loadImager('appendImage');
    
    console.log(exam_id);
    console.log(question_id);
    var exam_id = exam_id;
    var question_id = question_id;
    var aj = $(window).ajaxCall({
         proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',   
         data : {
             url:'pkInsert_infoExamQuestion' ,
             question_id : question_id,
             exam_id : exam_id,
             pk : $("#pk").val()
         }
    })
    aj.ajaxCall ({  
          onError : function (event, textStatus, errorThrown) {   
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Soru Ekleme İşlemi Başarısız...', 
                                       'Soru ekleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ')
              console.error('"pkInsert_infoExamQuestion" servis hatası->'+textStatus);
          },
          onSuccess : function (event, data) {
            var data = data;                                                
            loader.loadImager('removeLoadImage');
            
            sm.successMessage('show', 'Soru Ekleme İşlemi Başarılı...', 
                                       'Soru ekleme İşlemini gerçekleştirdiniz... ',
                                       data);
            $('#tt_grid_sinavsoru').datagrid('reload');
            $('#tt_tree_sinavsoru_popup').tree('reload');

          },
          onErrorDataNull : function (event, data) {
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Soru Ekleme İşlemi Başarısız...', 
                                       'Soru ekleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
              console.error('"pkInsert_infoExamQuestion" servis datası boştur!!');
          },
          onErrorMessage : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Soru Ekleme İşlemi Başarısız...', 
                                     'Soru ekleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkInsert_infoExamQuestion" servis hatası->'+textStatus);
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
              dm.dangerMessage('show', 'Soru Ekleme İşlemi Başarısız...', 
                                       'Soru daha önce eklenmiştir, yeni bir yetki deneyiniz... ');
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
window.deleteSinavSoruDialog = function(id) {
    var id = id;
    wcm.warningComplexMessage({onConfirm : function(event, data) {
        deleteSinavSoru(id);
    }
    });
    wcm.warningComplexMessage('show', 'Soru Silme İşlemi Gerçekleştirmek Üzeresiniz!', 
                                      'İlgili soru sınavdan silinecektir!! ');
}

/**
 *  question choices are updated
 * @param {type} nodeID
 * @param {type} nodeName
 * @returns {Boolean}
 * @author Mustafa Zeynel Dağlı
 * @since 15/06/2017
 */
window.deleteSinavSoru = function(id) {
    var loader = $("#loading-image-popup").loadImager();
    loader.loadImager('appendImage');
    
    var choice_id = id;
    
    /*console.log(node);
    console.log(id);
    console.log(tagBuilder);*/

    var aj = $(window).ajaxCall({
         proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',   
         data : {
             url:'pkDelete_infoExamQuestion' ,
             id : choice_id,
             pk : $("#pk").val()
         }
    })
    aj.ajaxCall ({  
          onError : function (event, textStatus, errorThrown) {   
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Şoru Silme İşlemi Başarısız...', 
                                       'Soru silme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ')
              console.error('"pkDelete_infoExamQuestion" servis hatası->'+textStatus);
          },
          onSuccess : function (event, data) {
            var data = data;                                                
            loader.loadImager('removeLoadImage');
            
            sm.successMessage('show', 'Soru Silme İşlemi Başarılı...', 
                                       'Soru silme işlemini gerçekleştirdiniz... ',
                                       data);
            $('#tt_grid_sinavsoru').datagrid('reload');
            $('#tt_tree_sinavsoru_popup').tree('reload');

          },
          onErrorDataNull : function (event, data) {
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Soru Silme İşlemi Başarısız...', 
                                       'Soru silme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
              console.error('"pkDelete_infoExamQuestion" servis datası boştur!!');
          },
          onErrorMessage : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Soru Silme İşlemi Başarısız...', 
                                     'Soru silme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkDelete_infoExamQuestion" servis hatası->'+textStatus);
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
              dm.dangerMessage('show', 'Soru Silme İşlemi Başarısız...', 
                                       'Şoru daha önce eklenmiştir, yeni bir soru deneyiniz... ');
          }
    }) 
    aj.ajaxCall('call');
}


/**
 * ACL privileges datagrid is being filled  
 * @since 14/07/2016
 */
$('#tt_grid_dynamic').datagrid({
    onDblClickRow : function (index, row) {
        
    },  
    url : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
    queryParams: {
            pk: $('#pk').val(),
            subject: 'datagrid',
            url : 'fillAllExamLists_infoExams',
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
            {field:'name',title:'Sınav',sortable:true,width:300},
            {field:'sinav_mevzuati',title:'Mevzuat',sortable:true,width:300},
            {field:'corporation',title:'Kurum',sortable:true,width:200},
            {field:'difficulty',title:'Zorluk',sortable:true,width:100},
            {field:'action',title:'Action',width:120,align:'center',
                formatter:function(value,row,index){
                    if(row.attributes.active == 0) {
                        var e = '<button style="padding : 2px 4px;" title="Pasif yap"  class="btn btn-primary" type="button" onclick="return activePassiveSinavWrapper(event, '+row.id+');"><i class="fa fa-minus-circle"></i></button>';
                    } else {
                        var e = '<button style="padding : 2px 4px;" title="Aktif yap"  class="btn btn-warning" type="button" onclick="return activePassiveSinavWrapper(event, '+row.id+');"><i class="fa fa-plus-circle"></i></button>';
                    }
                    var d = '<button style="padding : 2px 4px;" title="Sil"  class="btn btn-danger" type="button" onclick="return deleteSinavUltimatelyDialog('+row.id+', '+index+');"><i class="fa fa-eraser"></i></button>';
                    var u = '<button style="padding : 2px 4px;" title="Güncelle"  class="btn btn-info" type="button" onclick="return updateSinavDialog('+row.id+', { name : \''+row.name+'\',\n\                                                                                                                   \n\
                                                                                                                                                                       description : \''+row.description+'\',\n\
                                                                                                                                                                       corporation_id : '+row.corporation_id+',\n\
                                                                                                                                                                       difficulty_id : '+row.difficulty_id+',\n\
                                                                                                                                                                       sinav_mevzuati : \''+row.sinav_mevzuati+'\',\n\
                                                                                                                                                                       corporation : \''+row.corporation+'\',\n\
                                                                                                                                                                       exam_date : \''+row.exam_date+'\',\n\
                                                                                                                                                                       } );"><i class="fa fa-arrow-circle-up"></i></button>';
                    var k = '<button style="padding : 2px 4px;" title="Sınav Soruları Ekle/Çıkar"  class="btn btn-success" type="button" onclick="return updateSinavSoruDialog('+row.id+', { name : \''+row.name+'\',\n\                                                                                                                   \n\
                                                                                                                                                                       description : \''+row.description+'\',\n\
                                                                                                                                                                       corporation_id : '+row.corporation_id+',\n\
                                                                                                                                                                       difficulty_id : '+row.difficulty_id+',\n\
                                                                                                                                                                       sinav_mevzuati : \''+row.sinav_mevzuati+'\',\n\
                                                                                                                                                                       corporation : \''+row.corporation+'\',\n\
                                                                                                                                                                       exam_date : \''+row.exam_date+'\',\n\
                                                                                                                                                                       } );"><i class="fa fa-save"></i></button>';
                    return e+d+u+k;    
                }
            },
        ]]   
});
$('#tt_grid_dynamic').datagrid('enableFilter');


 /*
* 
* @type @call;$@call;loadImager
* @Since 26/07/2016
* @Author Mustafa Zeynel Dagli
* @Purpose this variable is to create loader image for Zend Modules
*  dropdown. Loading image will be removed when dropdown filled data.
*/
$("#loading-image-priority").loadImager();
$("#loading-image-priority").loadImager('appendImage');

/**
 * loading image for roles dropdown
 * @author Mustafa Zeynel Dağlı
 * @since 11/08/2016
 */
$("#loading-image-diffuculties").loadImager();
$("#loading-image-diffuculties").loadImager('appendImage');


/**
 * dropdownDiffuculty prepared
 * @type @call;$@call;ajaxCallWidget
 * @since 13/06/2017
 */
var ajaxDiffuculty = $('#loading-image-diffuculties').ajaxCallWidget({
    proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
            data: { url:'fillDifficulty_sysSpecificDefinitions' ,
                    pk : $("#pk").val() 
            }
   })
ajaxDiffuculty.ajaxCallWidget ({
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
            selectText: "Lütfen seçiniz222",
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
ajaxDiffuculty.ajaxCallWidget('call');



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
     if (node.attributes.active === 0) {
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
$('#sinavForm').validationEngine();

 /**
* reset button function for exam insert form
* @returns null
* @author Mustafa Zeynel Dağlı  
* @since 13/06/2017
*/
window.resetSinavForm = function () {
   $('#sinavForm').validationEngine('hide');
   $('#sinavForm')[0].reset();
   if($('#tt_tree_menu').tree('getSelected') !== null) {
        var node = $('#tt_tree_menu').tree('getSelected');
        $('#tt_tree_menu').tree('unselect', node.target);
        //$('#tt_tree_menu').tree('uncheck', node.target);
    }
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
window.resetSinavFormUpdate = function () {
   $('#sinavFormPopup').validationEngine('hide');
   $('#sinavFormPopup')[0].reset();
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
    wcm.warningComplexMessage('show', 'Sınav Silme İşlemi Gerçekleştirmek Üzeresiniz!', 
                                      'Sınav silmek üzeresiniz, silme işlemi geri alınamaz!! ');
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
            dm.dangerMessage('show', 'Sınav  Silme İşlemi Başarısız...',
                                     'Sınav  silinememiştir, sistem yöneticisi ile temasa geçiniz...');
            console.error('"pkDelete_sysAclActions" servis hatası->'+data.errorInfo);
        },
        onSuccess : function (event, data) {
            sm.successMessage({ 
                onShown : function() {
                    //console.warn(index);
                    $('#tt_grid_dynamic').datagrid('reload');
                }
            });
            sm.successMessage('show', 'Sınav Silme İşleminiz Başarılı...',
                                      'Sınav ilgili tüm datalarla beraber silinmiştir,  silme işleminiz başarılı...')
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
            dm.dangerMessage('show', 'Sınav  Silme İşlemi Başarısız...',
                                     'Sınav  silinememiştir, sistem yöneticisi ile temasa geçiniz...');
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
            sm.successMessage('show', 'Sınav Silme İşleminiz Başarılı...',
                                      'Sınav  silme işleminiz başarılı...')
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

 if ($("#sinavForm").validationEngine('validate')) {
    var ddData = $('#dropdownDiffuculty').data('ddslick');
    if(!ddData.selectedData.value > 0) {
         wm.warningMessage('resetOnShown');
         wm.warningMessage('show', 'Zorluk Derecesi Seçiniz', 'Lütfen zorluk derecesi seçiniz!');
         return false;
    }
    
    if($('#tt_tree_menu').tree('getSelected') === null) {
        wm.warningMessage('resetOnShown');
        wm.warningMessage('show', 'Kurum', 'Lütfen kurum  seçiniz!');
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
 * @since 26/07/2016
 * @version 11/08/2016
 */
window.updateSinavDialog = function (id, row) {
    window.gridReloadController = false;
    //console.log(row);
    BootstrapDialog.show({  
         title: '"'+ row.name + '" Zend Module-Action güncellemektesiniz...',
         message: function (dialogRef) {
                     var dialogRef = dialogRef;
                     var $message = $(' <div class="row">\n\
                                             <div class="col-md-12">\n\
                                                 <div id="loading-image-crud-popup" class="box box-primary">\n\
                                                     <form id="sinavFormPopup" method="get" class="form-horizontal">\n\
                                                     <input type="hidden" id="machine_tool_group_id_popup" name="machine_tool_group_id_popup"  />\n\
                                                     <div class="hr-line-dashed"></div>\n\
                                                         <div class="form-group" style="margin-top: 20px;">\n\
                                                             <label class="col-sm-2 control-label">Sınav Adı</label>\n\
                                                             <div class="col-sm-10">\n\
                                                                 <div class="input-group">\n\
                                                                     <div class="input-group-addon">\n\
                                                                         <i class="fa fa-hand-o-right"></i>\n\
                                                                     </div>\n\
                                                                     <div  class="tag-container-popup">\n\
                                                                         <input data-prompt-position="topLeft:70" class="form-control validate[required]" type="text" value="'+row.name+'" name="name_popup" id="name_popup" placeholder="Sınav adı"   />\n\
                                                                     </div>\n\
                                                                 </div>\n\
                                                             </div>\n\
                                                         </div>\n\
                                                         <div class="form-group" style="margin-top: 20px;">\n\
                                                             <label class="col-sm-2 control-label">Sınav Mevzuatı</label>\n\
                                                             <div class="col-sm-10">\n\
                                                                 <div class="input-group">\n\
                                                                     <div class="input-group-addon">\n\
                                                                         <i class="fa fa-hand-o-right"></i>\n\
                                                                     </div>\n\
                                                                     <div  class="tag-container-popup">\n\
                                                                         <input data-prompt-position="topLeft:70" class="form-control validate[required]" type="text" value="'+row.sinav_mevzuati+'" name="sinav_mevzuati_popup" id="sinav_mevzuati_popup" placeholder="Sinav mevzuati"   />\n\
                                                                     </div>\n\
                                                                 </div>\n\
                                                             </div>\n\
                                                         </div>\n\
                                                         <div class="form-group">\n\
                                                            <label class="col-sm-2 control-label">Sınav Tarihi</label>\n\
                                                            <div class="col-sm-10">\n\
                                                                <div class="input-group">\n\
                                                                    <div class="input-group-addon">\n\
                                                                        <i class="fa fa-code-fork"></i>\n\
                                                                    </div>\n\
                                                                    <input id="datemaskPopup"  type="text" class="form-control"  data-mask/>\n\
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
                                                                         <input data-prompt-position="topLeft:70" class="form-control validate[required]" type="text" value="'+row.corporation+'" attribute_corp_id="'+row.corporation_id+'" name="secili_kurum" id="secili_kurum" placeholder="Seçili kurum"   />\n\
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
                                                            <label class="col-sm-2 control-label">Sınav Zorluk Derecesi</label>\n\
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
                                                         <div class="hr-line-dashed"></div>\n\
                                                         <div class="form-group">\n\
                                                             <div class="col-sm-10 col-sm-offset-2">\n\
                                                             <button id="insertMachPopUp" class="btn btn-primary" type="submit" onclick="return updateSinavWrapper(event, '+id+');">\n\
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
            $('#sinavFormPopup').validationEngine();
            
            $("#datemaskPopup").inputmask("dd/mm/yyyy", {"placeholder": "gg/aa/yyyy"});
            var input_date = row.exam_date;
            var res = input_date.split("-");
            input_date = res[2]+'/'+res[1]+'/'+res[0];
            console.log(input_date);
            $("#datemaskPopup").val(""+input_date+"");
             
            
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
                         dm.dangerMessage('show', 'Sınav Bağlantılı Konular Bulunamamıştır...',
                                                  'Sınav bağlantılı konular bulunamamıştır, bir hata olduğunu düşünüyorsanız sistem yöneticiniz ile temasa geçiniz...');
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
                         dm.dangerMessage('show', 'Sınav Bağlantılı Kurumlar Bulunamamıştır...',
                                                  'Sınav bağlantılı kurumlar  bulunamamıştır...');
                         $('#mach-prop-box').loadImager('removeLoadImage');
                     },
               }) 
               ajaxMacProp.ajaxCallWidget('call');
            } else {
                wm.warningMessage('resetOnShown');
                wm.warningMessage('show', 'Sınav konuları Seçilmiştir!!!'
                                        , 'Sınav konuları yüklenmiş durumdadır...');
                $('#mach-prop-box').loadImager('removeLoadImage');
            }

            
            var ajaxDiiffucultyPopup = $('#loading-image-diffuculties-popup').ajaxCallWidget({
                proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
                        data: { url:'fillDifficulty_sysSpecificDefinitions' ,
                                pk : $("#pk").val() 
                        }
           })
            ajaxDiiffucultyPopup.ajaxCallWidget ({
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
                        $('#dropdownDiffucultyPopup').ddslick({
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
                        
                        ddData = $('#dropdownDiffucultyPopup').data('ddslick');
                        $('#dropdownDiffucultyPopup').ddslick('selectByValue', 
                                                    {index: ''+row.difficulty_id+''}
                                                    );
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
            ajaxDiiffucultyPopup.ajaxCallWidget('call');
            
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
                $("#loading-image-popup").loadImager('removeLoadImage');
                if(data.length>0) {
                    //$("#loading-image-popup").loadImager('removeLoadImage');
                }
            },
            onSelect: function(node){
                $("#secili_kurum").val(node.text);
                $("#secili_kurum").attr("attribute_corp_id", node.id);
            },
            
            /*formatter: function (node) {  
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
                    //return s;
                //}
            //}
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
                    //addSinavKonu(id,node,tagBuilder);
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
 * add topic to exam
 * @param {type} nodeID
 * @param {type} nodeName
 * @returns {undefined}
 * @author Mustafa Zeynel Dağlı
 * @since 16/06/2017
 */
window.addSinavKonu = function (id, node, tagBuilder) {
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
 * update exam wrapper
 * @returns {Boolean}
 * @author Mustafa Zeynel Dağlı
 * @since 13/06/2017
 */
window.updateSinavWrapper = function (e, id) {
 e.preventDefault();
 var id = id;
 if ($("#sinavFormPopup").validationEngine('validate')) {
     
    /*if($('#tt_tree_menu_popup').tree('getSelected') != null) {
        wm.warningMessage('resetOnShown');
        wm.warningMessage('show', 'Kurum', 'Lütfen kurum  seçiniz!');
        return false;
    } */
        
    if($("#secili_kurum").attr("attribute_corp_id")===null || $("#secili_kurum").attr("attribute_corp_id")<=0) {
        wm.warningMessage('resetOnShown');
        wm.warningMessage('show', 'Kurum', 'Lütfen kurum  seçiniz!');
        return false;
    }
    
    var ddData = $('#dropdownDiffucultyPopup').data('ddslick');
    if(!ddData.selectedData.value>0) {
        wm.warningMessage('resetOnShown');
        wm.warningMessage('show', 'ZEND Modül Seçiniz', 'Lütfen Zend modül seçiniz!');
        return false;
    }

    updateSinav(id);
    return false;
 }
 return false;
}

window.updateSinavAct = function (id,role_ids, module_id) {
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
             dm.dangerMessage('show', 'Sınav Güncelleme İşlemi Başarısız...', 
                                      'Sınav güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkUpdate_sysAclActions" servis hatası->'+textStatus);
          },
          onSuccess : function (event, data) {
             var data = data;
             sm.successMessage({
                 onShown: function( event, data ) {
                     loader.loadImager('removeLoadImage');
                 }
             });
             sm.successMessage('show', 'Sınav Güncelleme İşlemi Başarılı...', 
                                       'Sınav güncelleme işlemini gerçekleştirdiniz... ',
                                       data);
             window.gridReloadController = true;
          },
          onErrorDataNull : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Sınav Güncelleme İşlemi Başarısız...', 
                                      'Sınav güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkUpdate_sysAclActions" servis datası boştur!!');
          },
          onErrorMessage : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Sınav Güncelleme İşlemi Başarısız...', 
                                      'Sınav güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
          },
          onError23503 : function (event, data) {
             
            },
          onError23505 : function (event, data) {
          }
    }) 
    ajUpdateACT.ajaxCall('call');
}

/**
 * update exam
 * @returns {undefined}
 * @author Mustafa Zeynel Dağlı
 * @since 13/06/2017
 * @version 11/08/2016
 */
window.updateSinav = function (id) {
     var loader = $('#loading-image-crud-popup').loadImager();
     loader.loadImager('appendImage');
     
     var name = $('#name_poup').val();
     var description = $('#description_popup').val();
     var sinav_mevzuati = $('#sinav_mevzuati_popup').val();
     
     var ddData = $('#dropdownDiffucultyPopup').data('ddslick')
     var difficulty_id = ddData.selectedData.value;  
     
     //var node = $('#tt_tree_menu').tree('getSelected'); 
     var corporation_id = $("#secili_kurum").attr("attribute_corp_id");
     
     var input_date = $('#datemaskPopup').val();
     var res = input_date.split("/");
    input_date = res[1]+'/'+res[0]+'/'+res[2];
     console.log(input_date);
    var entered_date = new Date(input_date);
    var date_value = entered_date.getTime();
    var exam_date = Math.round(date_value / 1000);
    console.log(exam_date);
    console.log(corporation_id);
    console.log(difficulty_id);
    
    
    var myDate = new Date(input_date);
    var offset = myDate.getTimezoneOffset() * 60 * 1000;

    var withOffset = myDate.getTime();
    var withoutOffset = withOffset - offset;
    withoutOffset = Math.round(withoutOffset/1000);
    console.log(withOffset);
    console.log(withoutOffset);
     
     
     
     
     var aj = $(window).ajaxCall({
                     proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
                     data : {
                         url:'pkUpdate_infoExams' ,
                         name : name,
                         description : description,
                         sinav_mevzuati : sinav_mevzuati,
                         difficulty_id: difficulty_id,
                         corporation_id : corporation_id,
                         exam_date : withoutOffset,
                         pk : $("#pk").val()
                     }
    })
    aj.ajaxCall ({
          onError : function (event, textStatus, errorThrown) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Sınav Güncelleme İşlemi Başarısız...', 
                                      'Sınav güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkUpdate_infoExams" servis hatası->'+textStatus);
          },
          onSuccess : function (event, data) {
             var data = data;
             sm.successMessage({
                 onShown: function( event, data ) {
                     loader.loadImager('removeLoadImage');
                 }
             });
             sm.successMessage('show', 'Sınav Güncelleme İşlemi Başarılı...', 
                                       'Sınav güncelleme işlemini gerçekleştirdiniz... ',
                                       data);
             window.gridReloadController = true;
          },
          onErrorDataNull : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Sınav Güncelleme İşlemi Başarısız...', 
                                      'Sınav güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkUpdate_infoExams" servis datası boştur!!');
          },
          onErrorMessage : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Sınav Güncelleme İşlemi Başarısız...', 
                                      'Sınav güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
          },
          onError23503 : function (event, data) {
              if(data.errorInfoColumn === 'haveRecordsActionPrivilegRestServices') {
                  wm.warningMessage('resetOnShown');
                  wm.warningMessage('show', 'Silme İşlemi Gerçekleştiremezsiniz!', 'Action  bağlı servis tanımlandığı için silme işlemi\n\
                                   gerçekleştiremezsiniz, önce Action / Servis  ilişkisi silinmelidir!');
                  loader.loadImager('removeLoadImage');
              } else if(data.errorInfoColumn === 'haveRecordsAclPrivileg') {
                  wcm.warningComplexMessage({onConfirm : function(event, data) {
                        loader.loadImager('removeLoadImage');
                        window.updateSinavAct(id, role_ids, module_id);
                  }
                  });
                  wcm.warningComplexMessage({onGiveup : function(event, data) {
                        loader.loadImager('removeLoadImage');
                  }
                  });
                  wcm.warningComplexMessage('show', 'Sınava Bağlı Veri Bulunmaktadır!', 
                                                    'Sınava bağlı veri Bulunmaktadır, güncelleme işlemi ile bu verilerde güncellenecektir, güncelleme işlemine devam etmek istediğinize emin misiniz? ');
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
     
     var name = $('#name').val();
     var description = $('#description').val();
     var sinav_mevzuati = $('#sinav_mevzuati').val();
     
     var ddData = $('#dropdownDiffuculty').data('ddslick')
     var difficulty_id = ddData.selectedData.value;
     
     var node = $('#tt_tree_menu').tree('getSelected');
     var corporation_id = node.id;
     
     var input_date = $('#datemask').val();
     var res = input_date.split("/");
    input_date = res[1]+'/'+res[0]+'/'+res[2];
     console.log(input_date);
    var entered_date = new Date(input_date);
    var date_value = entered_date.getTime();
    var exam_date = Math.round(date_value / 1000);
    console.log(exam_date);
    console.log(corporation_id);
    console.log(difficulty_id);
    
    
    var myDate = new Date(input_date);
    var offset = myDate.getTimezoneOffset() * 60 * 1000;

    var withOffset = myDate.getTime();
    var withoutOffset = withOffset - offset;
    withoutOffset = Math.round(withoutOffset/1000);
    console.log(withOffset);
    console.log(withoutOffset);
     
     var aj = $(window).ajaxCall({
                     proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',   
                     data : {
                         url:'pkInsert_infoExams' ,
                         name : name,
                         description : description,
                         sinav_mevzuati : sinav_mevzuati,
                         difficulty_id: difficulty_id,
                         corporation_id : corporation_id,
                         exam_date : withoutOffset,
                         pk : $("#pk").val()
                     }
    })
    aj.ajaxCall ({  
          onError : function (event, textStatus, errorThrown) {   
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Sınav  Ekleme İşlemi Başarısız...', 
                                       'Sınav ekleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ')
              console.error('"pkInsert_infoExams" servis hatası->'+textStatus);
              resetSinavForm();
          },
          onSuccess : function (event, data) {
              //console.log(data);
              var data = data;
             sm.successMessage({
                 onShown: function( event, data ) {
                     resetSinavForm(); 
                     loaderInsertBlock.loadImager('removeLoadImage');
                     $('#tt_grid_dynamic').datagrid({
                         queryParams: {
                                 pk: $('#pk').val(),
                                 subject: 'datagrid',
                                 url : 'fillAllExamLists_infoExams',
                                 sort : 'id',
                                 order : 'desc',
                         },
                     });
                     $('#tt_grid_dynamic').datagrid('enableFilter');
                     $('#tt_grid_dynamic').datagrid('reload');
                 }
             });
             sm.successMessage('show', 'Sınav Kayıt İşlemi Başarılı...', 
                                       'Sınav kayıt işlemini gerçekleştirdiniz... ',
                                       data);

          },
          onErrorDataNull : function (event, data) {
              dm.dangerMessage('resetOnShown');
              dm.dangerMessage('show', 'Sınav Kayıt İşlemi Başarısız...', 
                                       'Sınav  kayıt işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
              console.error('"pkInsert_infoExams" servis datası boştur!!');
              resetSinavForm();
          },
          onErrorMessage : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Sınav  Kayıt İşlemi Başarısız...', 
                                     'Sınav  kayıt işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkInsert_infoExams" servis hatası->'+data.errorInfo);
          },
          onError23505 : function (event, data) {
              dm.dangerMessage({
                 onShown : function(event, data) {
                     resetSinavForm();
                     loaderInsertBlock.loadImager('removeLoadImage');
                 }
              });
              dm.dangerMessage('show', 'Sınav Kayıt İşlemi Başarısız...', 
                                       'Aynı isim ile Sınav  kaydı yapılmıştır, yeni bir sınav adı deneyiniz... ');
          }
    }) 
    aj.ajaxCall('call');
}


   

/**
 * active/passive exam wrapper
 * @returns {Boolean}
 * @author Mustafa Zeynel Dağlı
 * @since 26/07/2016
 */
window.activePassiveSinavWrapper = function (e, id) {
 e.preventDefault();
 var id = id;
 var domElement = e.target;
 wcm.warningComplexMessage({onConfirm : function(event, data) {
        activePassiveSinav(id, domElement);
    }
    });
wcm.warningComplexMessage('show', 'Sınav Aktif/Pasif İşlemi Gerçekleştirmek Üzeresiniz!', 
                                  'Sınav aktif/pasif işlemi gerçekleştirmek  üzeresiniz...');
 return false;
}

/**
 * active or passive exam
 * @returns {undefined}
 * @author Mustafa Zeynel Dağlı
 * @since 13/06/2017
 */
window.activePassiveSinav = function (id, domElement) {
    var loader = $("#loading-image-grid-container").loadImager();
    loader.loadImager('appendImage');
    var id = id;
    //console.log(domElement);

    var aj = $(window).ajaxCall({
                     proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
                     data : {
                         url:'pkUpdateMakeActiveOrPassive_infoExams',
                         id : id,
                         pk : $("#pk").val()
                     }
    })
    aj.ajaxCall ({
          onError : function (event, textStatus, errorThrown) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Sınav Aktif/Pasif İşlemi Başarısız...', 
                                      'Sınav aktif/pasif işlemi, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkUpdateMakeActiveOrPassive_infoExams" servis hatası->'+textStatus);
          },
          onSuccess : function (event, data) {
             var data = data;
             sm.successMessage({
                 onShown: function( event, data ) {
                     loader.loadImager('removeLoadImage');
                 }
             });
             sm.successMessage('show', 'Sınav Aktif/Pasif İşlemi Başarılı...', 
                                       'Sınav aktif/pasif işlemini gerçekleştirdiniz... ',
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
             dm.dangerMessage('show', 'Sınav Aktif/Pasif İşlemi Başarısız...', 
                                      'Sınav aktif/pasif işlemi güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
             console.error('"pkUpdateMakeActiveOrPassive_infoExams" servis datası boştur!!');
          },
          onErrorMessage : function (event, data) {
             dm.dangerMessage('resetOnShown');
             dm.dangerMessage('show', 'Sınav Aktif/Pasif İşlemi Başarısız...', 
                                      'Sınav aktif/pasif işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ');
          },
          onError23503 : function (event, data) {
          },
          onError23505 : function (event, data) {
          }
    }) 
    aj.ajaxCall('call');
}

   
   
   
});
