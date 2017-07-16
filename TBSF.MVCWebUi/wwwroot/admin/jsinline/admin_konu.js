$(document).ready(function () {

    /**
     * easyui tree extend for 'unselect' event
     * @author Mustafa Zeynel Dağlı
     * @since 30/03/2016
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
     * Topic types types  select box filling
     * @author Mustafa Zeynel Dağlı
     * @since 13/06/2017
     */
    $.ajax({
        url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
        data: { url:'fillSubjectsTypes_sysSpecificDefinitions' ,} ,
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            if(data.length!==0) {
                $('#dropdownSubjectTypes').ddslick({
                    height : 200,
                    data : data, 
                    //data : [{"text":"Admin Yönetim","value":1,"selected":false,"description":"Admin Yönetim"},{"text":"Firma Yönetim","value":2,"selected":false,"description":"Firma Yönetim"},{"text":"Firma Profil","value":3,"selected":false,"description":"Firma Profil"}],
                    width:'98%',
                    search : true,
                    //selectText: "Select your preferred social network",
                    imagePosition:"right",
                    onItemClicked : function(target) {
                        //console.log(target.value);
                        /*loader.loadImager('removeLoadImage');
                        $("#loading-image").loadImager();
                        $("#loading-image").loadImager('appendImage');*/
                    },   
                });
            } else {
                console.error('"pkFillMenuTypeList_sysMenuTypes" servis datası boştur!!');
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {           
            console.error('"pkFillMenuTypeList_sysMenuTypes" servis hatası->'+textStatus);
        }
    });
/*
* 
* @type @call;$@call;tree
* Topic tree
* Mustafa Zeynel Dağlı
* 13/06/2017
*/

$('#tt_tree_menu').tree({  
url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=fillSubjectsTree_sysSubjects&pk=' + $("#pk").val()+ '&language_code='+$("#langCode").val(),
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
     $('#konu_name').val(selectedItem.text);
     $('#konu_abbreviation').val(selectedItem.attributes.abbreviation);
     $('#description').val(selectedItem.attributes.description);
     $('#updateKonu').attr('disabled', false);
     $('#insertKonu').attr('disabled', true);
     $('#dropdownSubjectTypes').ddslick('selectByValue', 
                                                    {index: ''+selectedItem.attributes.subject_type_id+''}
                                                    );

 },
 formatter: function (node) {
     var s = node.text;
     var id = node.id;
     if (node.attributes.active == 0) {
         s += '&nbsp;<i class="fa fa-fw fa-trash-o" title="menü sil" onclick="deleteKonuDialog('+id+')"></i>&nbsp;\n\
              <i class="fa fa-fw fa-ban" title="pasif yap" onclick="passiveKonuDialog('+id+');"></i>&nbsp;&nbsp;\n\
             <i class="fa fa-level-down" title="alt kırılıma menü ekle" onclick="insertKonuDialog('+id+', \''+node.text+'\')"></i>';
         return s;

     } else if (node.attributes.active == 1) {
         s += '&nbsp;<i class="fa fa-fw fa-trash-o" title="menü sil" onclick="deleteKonuDialog('+id+')"></i>&nbsp;\n\
         <i class="fa fa-fw fa-check-square-o" title="aktif yap" onclick="activeKonuDialog('+id+');"></i>';
         s = "<font color = '#B6B6B4'>" + s + "</font>"
         //buda koşullu kullanım için örnek satır    
         /*if (node.children) {
             s += '&nbsp;<a href=<span style=\'color:blue\'>(' + node.children.length + ')</span>';
         }*/
         return s;
     }
 }
});
    
    

    var selectedNode;


    // Left menuyu oluşturmak için çağırılan fonksiyon...
    //$.fn.leftMenuFunction();

    //Validation forms binded...
    jQuery("#konuForm").validationEngine();
    


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

    //$('#konuForm').submit(newRoleSubmission);
    
   /**
    * wrapper class for pop up and delete topic item
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 13/06/2017
    */
   window.deleteKonuDialog= function(nodeID){
       var nodeID = nodeID;
        BootstrapDialog.show({
            type: BootstrapDialog.TYPE_WARNING,
            title: 'Konu Silme İşlemi Gerçekleştirmek Üzeresiniz!',
            message: 'Konu Öğesini silmek üzeresiniz, konu silme işlemi geri alınamaz!! ',
            buttons: [ {
                icon: 'glyphicon glyphicon-ban-circle',
                label: 'Vazgeç',
                cssClass: 'btn-warning',
                action: function(dialogItself){
                    dialogItself.close();
                }
            }, {
                icon: 'glyphicon glyphicon-ok-sign',
                label: 'Sil',
                cssClass: 'btn-success',
                action: function(dialogItself){
                    dialogItself.close();
                    deleteKonu(nodeID);
                }
            }]
        });
   }
   
   /**
    * set entity item delete
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 11/06/2016
    * @todo delet servisi eklenecek
    */
   window.deleteKonu = function(nodeID) {
       var loader = $("#loading-image-crud").loadImager();
       loader.loadImager('appendImage');
       selectedTreeItem = $('#tt_tree_menu').tree('find', nodeID);
       $.ajax({
        url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
        data: { url:'pkDelete_leftnavigation' ,
                id : nodeID,
                pk : $("#pk").val()}, 
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            if(data.length!==0) {
                if(data.found) {
                    BootstrapDialog.show({
                        type: BootstrapDialog.TYPE_SUCCESS,
                        title: 'Krum Silme İşlemi Başarılı...',
                        message: 'Kurum Silme işlemini gerçekleştirdiniz... ',
                        buttons: [ {
                            icon: 'glyphicon glyphicon-ok-sign',
                            label: 'Kapat',
                            cssClass: 'btn-success',
                            action: function(dialogItself){
                                dialogItself.close();
                                loader.loadImager('removeLoadImage');
                            }
                        }]
                    });
                    selectedTreeItem = $('#tt_tree_menu').tree('remove', selectedTreeItem.target);
                } else {
                    BootstrapDialog.show({
                        type: BootstrapDialog.TYPE_DANGER,
                        title: 'Konu Silme İşlemi Başarısız...',
                        message: 'Konu Silme işlemini gerçekleştiremediniz,sistem yöneticisi ile temasa geçiniz... ',
                        buttons: [ {
                            icon: 'glyphicon glyphicon-ban-circle',
                            label: 'Kapat',
                            cssClass: 'btn-danger',
                            action: function(dialogItself){
                                dialogItself.close();
                            }
                        }]
                    });
                    console.error('"pkDelete_leftnavigation" unknown error!!');
                }
                
                            
            } else {
                BootstrapDialog.show({
                    type: BootstrapDialog.TYPE_DANGER,
                    title: 'Konu Silme İşlemi Başarısız...',
                    message: 'Konu Silme işlemini gerçekleştiremediniz,sistem yöneticisi ile temasa geçiniz... ',
                    buttons: [ {
                        icon: 'glyphicon glyphicon-ban-circle',
                        label: 'Kapat',
                        cssClass: 'btn-danger',
                        action: function(dialogItself){
                            dialogItself.close();
                        }
                    }]
                });
                console.error('"pkDelete_leftnavigation" servis datası boştur!!');
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {           
            console.error('"pkDelete_leftnavigation" servis hatası->'+textStatus);
        }
    });
   }
   
   /**
    * wrapper class for pop up and passive topic item
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 13/06/2017
    */
   window.passiveKonuDialog= function(nodeID){
        var nodeID = nodeID;
        BootstrapDialog.show({
            type: BootstrapDialog.TYPE_WARNING,
            title: 'Konu Ögesini Pasifleştirmek Üzeresiniz!',
            message: 'Konu öğesini pasifleştirmek üzeresiniz !! ',
            buttons: [ {
                icon: 'glyphicon glyphicon-ban-circle',
                label: 'Vazgeç',
                cssClass: 'btn-warning',
                action: function(dialogItself){
                    dialogItself.close();
                }
            }, {
                icon: 'glyphicon glyphicon-ok-sign',
                label: 'Pasif Yap',
                cssClass: 'btn-success',
                action: function(dialogItself){
                    dialogItself.close();
                    passiveKonu(nodeID);
                }
            }]
        });
   }
   
   /**
    * set topic item passive
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 13/06/2017
    */
   window.passiveKonu = function(nodeID) {
       var loader = $("#loading-image-crud").loadImager();
       loader.loadImager('appendImage');
       selectedTreeItem = $('#tt_tree_menu').tree('find', nodeID);
       //selectedTreeItem = $('#tt_tree_menu').tree('find', nodeID);
       
       $.ajax({
        url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
        data: { url:'pkUpdateMakeActiveOrPassive_sysSubjects' ,
                id : nodeID,
                pk : $("#pk").val()}, 
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            if(data.length!==0) {
                if(data.found) {
                   BootstrapDialog.show({
                        type: BootstrapDialog.TYPE_SUCCESS,
                        title: 'Konu Pasif İşlemi Başarılı...',
                        message: 'Konu Pasifleştirme işlemini gerçekleştirdiniz... ',
                        buttons: [ {
                            icon: 'glyphicon glyphicon-ok-sign',
                            label: 'Kapat',
                            cssClass: 'btn-success',
                            action: function(dialogItself){
                                dialogItself.close();
                                loader.loadImager('removeLoadImage');
                            }
                        }]
                    });
                    var nodeState;
                    if($('#tt_tree_menu').tree('isLeaf', selectedTreeItem.target)) {
                        nodeState = 'open';
                    } else {
                        nodeState = 'closed';
                    }
                    
                    var parentNode = $('#tt_tree_menu').tree('getParent', selectedTreeItem.target);
                    var node = selectedTreeItem;
                    $('#tt_tree_menu').tree('remove', selectedTreeItem.target);
                    if(jQuery.type(parentNode) === "null") { 
                        $('#tt_tree_menu').tree('append', {
                            data: [{
                                    attributes:{notroot: node.attributes.notroot, 
                                                active: 1, 
                                                abbreviation: node.attributes.abbreviation,
                                                description: node.attributes.description,
                                                subject_type_id : node.attributes.subject_type_id},
                                    id: node.id,
                                    text: node.text,
                                    checked: false,
                                    state : nodeState,
                                },]
                        });
                    } else {
                        $('#tt_tree_menu').tree('append', {
                            parent: parentNode.target,
                            data: [{
                                    attributes:{notroot: node.attributes.notroot,  
                                                active: 1, 
                                                abbreviation: node.attributes.abbreviation,
                                                description: node.attributes.description,
                                                subject_type_id : node.attributes.subject_type_id},
                                    id: node.id,
                                    text: node.text,
                                    checked: false,
                                    state : nodeState,
                                },]
                        });
                    }
                            
                   regulateButtons(); 
                } else {
                    BootstrapDialog.show({
                        type: BootstrapDialog.TYPE_DANGER,
                        title: 'Konu Pasifleştirme İşlemi Başarısız...',
                        message: 'Konu pasifleştirme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ',
                        buttons: [ {
                            icon: 'glyphicon glyphicon-ok-sign',
                            label: 'Kapat',
                            cssClass: 'btn-danger',
                            action: function(dialogItself){
                                dialogItself.close();
                            }
                        }]
                    });
                    regulateButtons();
                }           
            } else {
                BootstrapDialog.show({
                    type: BootstrapDialog.TYPE_DANGER,
                    title: 'Konu Pasifleştirme İşlemi Başarısız...',
                    message: 'Konu pasifleştirme işlemini gerçekleştiremediniz,sistem yöneticisi ile temasa geçiniz... ',
                    buttons: [ {
                        icon: 'glyphicon glyphicon-ban-circle',
                        label: 'Kapat',
                        cssClass: 'btn-danger',
                        action: function(dialogItself){
                            dialogItself.close();
                        }
                    }]
                });
                console.error('"pkUpdateMakeActiveOrPassive_sysSubjects" servis datası boştur!!');
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {           
            console.error('"pkUpdateMakeActiveOrPassive_sysSubjects" servis hatası->'+textStatus);
        }
    });
   }
   
   /**
    * wrapper class for pop up and active topic item
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 13/06/2017
    */
   window.activeKonuDialog= function(nodeID){
        var nodeID = nodeID;
        BootstrapDialog.show({
            type: BootstrapDialog.TYPE_WARNING,
            title: 'Konu Ögesini Aktifleştirmek Üzeresiniz!',
            message: 'Konu öğesini aktifleştirmek üzeresiniz !! ',
            buttons: [ {
                icon: 'glyphicon glyphicon-ban-circle',
                label: 'Vazgeç',
                cssClass: 'btn-warning',
                action: function(dialogItself){
                    dialogItself.close();
                }
            }, {
                icon: 'glyphicon glyphicon-ok-sign',
                label: 'Aktif Yap',
                cssClass: 'btn-success',
                action: function(dialogItself){
                    dialogItself.close();
                    activeKonu(nodeID);
                }
            }]
        });
   }
   
   /**
    * set topic item active
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 13/06/2017
    */
   window.activeKonu = function(nodeID) {
       var loader = $("#loading-image-crud").loadImager();
       loader.loadImager('appendImage');
       selectedTreeItem = $('#tt_tree_menu').tree('find', nodeID);
       
       $.ajax({
        url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
        data: { url:'pkUpdateMakeActiveOrPassive_sysSubjects' ,
                id : nodeID,
                pk : $("#pk").val()}, 
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            if(data.length!==0) {
                if(data.found) {
                    BootstrapDialog.show({
                    type: BootstrapDialog.TYPE_SUCCESS,
                    title: 'Konu Aktifleştirme İşlemi Başarılı...',
                    message: 'Konu aktifleştirme işlemini gerçekleştirdiniz... ',
                    buttons: [ {
                        icon: 'glyphicon glyphicon-ok-sign',
                        label: 'Kapat',
                        cssClass: 'btn-success',
                        action: function(dialogItself){
                            dialogItself.close();
                            loader.loadImager('removeLoadImage');
                        }
                    }]
                });
                var nodeState;
                if($('#tt_tree_menu').tree('isLeaf', selectedTreeItem.target)) {
                    nodeState = 'open';
                } else {
                    nodeState = 'closed';
                }
                
                var parentNode = $('#tt_tree_menu').tree('getParent', selectedTreeItem.target);
                var node = selectedTreeItem;
                $('#tt_tree_menu').tree('remove', selectedTreeItem.target);
                if(jQuery.type(parentNode) === "null") { 
                    $('#tt_tree_menu').tree('append', {
                        data: [{
                                attributes:{notroot: node.attributes.notroot,  
                                            active: 0, 
                                            abbreviation: node.attributes.abbreviation,
                                            description: node.attributes.description,
                                            subject_type_id : node.attributes.subject_type_id},
                                id: node.id,
                                text: node.text,
                                checked: false,
                                state : nodeState,
                            },]
                    });
                } else {
                    $('#tt_tree_menu').tree('append', {
                        parent: parentNode.target,
                        data: [{
                                attributes:{notroot: node.attributes.notroot,  
                                            active: 0, 
                                            abbreviation: node.attributes.abbreviation,
                                            description: node.attributes.description,
                                            subject_type_id : node.attributes.subject_type_id},
                                id: node.id,
                                text: node.text,
                                checked: false,
                                state : nodeState,
                            },]
                    });
                }
                
                regulateButtons();
                } 
                else {
                   BootstrapDialog.show({
                        type: BootstrapDialog.TYPE_DANGER,
                        title: 'Konu Aktifleştirme İşlemi Başarısız...',
                        message: 'Konu aktifleştirme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ',
                        buttons: [ {
                            icon: 'glyphicon glyphicon-ok-sign',
                            label: 'Kapat',
                            cssClass: 'btn-danger',
                            action: function(dialogItself){
                                dialogItself.close();
                            }
                        }]
                    });
                    regulateButtons();
               }          
            } else {
                BootstrapDialog.show({
                    type: BootstrapDialog.TYPE_DANGER,
                    title: 'Konu Aktifleştirme İşlemi Başarısız...',
                    message: 'Konu aktifleştirme işlemini gerçekleştiremediniz,sistem yöneticisi ile temasa geçiniz... ',
                    buttons: [ {
                        icon: 'glyphicon glyphicon-ban-circle',
                        label: 'Kapat',
                        cssClass: 'btn-danger',
                        action: function(dialogItself){
                            dialogItself.close();
                        }
                    }]
                });
                console.error('"pkUpdateMakeActiveOrPassive_sysSubjects" servis datası boştur!!');
                regulateButtons();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {           
            console.error('"pkUpdateMakeActiveOrPassive_sysSubjects" servis hatası->'+textStatus);
        }
    });
   } 
   
   /**
    * reset button function setting disabled/ enabled
    * for 'insert' and 'update' form buttons
    * @returns null
    * @author Mustafa Zeynel Dağlı
    * @since 13/06/2017
    */
   window.regulateButtons = function () {
       $('#updateKonu').attr('disabled', true);
       $('#insertKonu').attr('disabled', false);
       if($('#tt_tree_menu').tree('getSelected') != null) {
           var node = $('#tt_tree_menu').tree('getSelected');
           $('#tt_tree_menu').tree('unselect', node.target);
           //$('#tt_tree_menu').tree('uncheck', node.target);
       }
       $('#konuForm').validationEngine('hide');
       //$('#tt_tree_menu').tree('unselect');
       $('#konuForm')[0].reset();
       $('#dropdownSubjectTypes').ddslick('selectByValue', 
                                                    {index: '0'}
                                                    );
   }
   
   /**
    * reset action after update operation
    * @returns null
    * @author Mustafa Zeynel Dağlı
    * @since 13/06/2017
    */
   window.regulateAfterUpdate = function() {
       $('#konuForm')[0].reset();
        $('#updateKonu').attr('disabled', true);
        $('#insertKonu').attr('disabled', false);
        if($('#tt_tree_menu').tree('getSelected') != null) {
            var node = $('#tt_tree_menu').tree('getSelected');
            $('#tt_tree_menu').tree('unselect', node.target);
        }
        $('#dropdownSubjectTypes').ddslick('selectByValue', 
                                                    {index: '0'}
                                                    );
   }
   
   /**
    * reset action for dialog 'reset button'
    * @returns null
    * @author Mustafa Zeynel Dağlı
    * @since 13/06/2017
    */
   window.resetDialog = function() {
       $('#konuFormInsert')[0].reset();
       $('#konuFormInsert').validationEngine('hide');
       $('#dropdownSubjectTypesPopup').ddslick('selectByValue', 
                                                    {index: '0'}
                                                    );
       return false;
   }
   
   /**
    * insert topic to parent topicwrapper 
    * @returns {Boolean}
    * @author Mustafa Zeynel Dağlı
    * @since 13/06/2017
    */
   window.insertKonuWrapper = function (e, nodeID, nodeName) {
    e.preventDefault();
    var nodeID = nodeID;
    var nodeName = nodeName;

    if ($("#konuFormInsert").validationEngine('validate')) {
        var ddData = $('#dropdownSubjectTypesPopup').data('ddslick');
        if(ddData.selectedData.value>0) {
            insertKonu(nodeID, nodeName);
        } else {
            BootstrapDialog.show({
                title: 'Konu Tipi Seçiniz',
                message: 'Lütfen Konu Tipi Seçiniz!',
                type: BootstrapDialog.TYPE_WARNING,
        //        closable: false
            });
        }
    }
    return false;
   }
   
   window.insertKonuDialog = function (nodeID, nodeName) {
    var nodeID = nodeID;
    var nodeName = nodeName;
    BootstrapDialog.show({
        title: '"'+ nodeName + '" Konusu altına yeni konu eklemektesiniz...',
        message: function (dialogRef) {
                    var dialogRef = dialogRef;
                    var $message = $(' <div class="row">\n\
                                            <div class="col-md-12">\n\
                                                <div id="loading-image-crud-popup" class="box box-primary">\n\
                                                    <form id="konuFormInsert" method="get" class="form-horizontal">\n\
                                                    <div class="hr-line-dashed"></div>\n\
                                                        <div class="form-group" style="margin-top: 20px;">\n\
                                                            <label class="col-sm-2 control-label">Konu</label>\n\
                                                            <div class="col-sm-10">\n\
                                                                <div class="input-group">\n\
                                                                    <div class="input-group-addon">\n\
                                                                        <i class="fa fa-hand-o-right"></i>\n\
                                                                    </div>\n\
                                                                    <input data-prompt-position="topLeft:70" class="form-control validate[required]" type="text" name="konu_name_popup" id="konu_name_popup" placeholder="Konu adı" />\n\
                                                                </div>\n\
                                                            </div>\n\
                                                        </div>\n\
                                                        <div class="form-group">\n\
                                                            <label class="col-sm-2 control-label">Konu(Kısaltma vs.)</label>\n\
                                                            <div class="col-sm-10">\n\
                                                                <div class="input-group">\n\
                                                                    <div class="input-group-addon">\n\
                                                                        <i class="fa fa-hand-o-right"></i>\n\
                                                                    </div>\n\
                                                                    <input data-prompt-position="topLeft:70" class="form-control validate[required]" type="text" name="konu_abbreviation_popup" id="konu_abbreviation_popup" placeholder="Konu kısaltma" />\n\
                                                                </div>\n\
                                                            </div>\n\
                                                        </div>\n\
                                                        <div class="form-group">\n\
                                                            <label class="col-sm-2 control-label">Konu Tipleri</label>\n\
                                                            <div class="col-sm-10">\n\
                                                                <div class="input-group" id="mach-prod-box-popup">\n\
                                                                    <div class="input-group-addon">\n\
                                                                        <i class="fa fa-hand-o-right"></i>\n\
                                                                    </div>\n\
                                                                    <div id="dropdownSubjectTypesPopup" ></div>\n\
                                                                </div>\n\
                                                            </div>\n\
                                                        </div>\n\
                                                        <div class="form-group">\n\
                                                            <label class="col-sm-2 control-label">Açıklama</label>\n\
                                                            <div class="col-sm-10">\n\
                                                                <div class="input-group">\n\
                                                                    <div class="input-group-addon">\n\
                                                                        <i class="fa fa-hand-o-right"></i>\n\
                                                                    </div>\n\
                                                                    <textarea data-prompt-position="topLeft:70" class="form-control validate[required]" rows="3" name="description_popup" id="description_popup" placeholder="Açıklama ..."></textarea>\n\
                                                                </div>\n\
                                                            </div>\n\
                                                        </div>\n\
                                                        <div class="hr-line-dashed"></div>\n\
                                                        <div class="form-group">\n\
                                                            <div class="col-sm-10 col-sm-offset-2">\n\
                                                            <button id="insertKonuPopUp" class="btn btn-primary" type="submit" onclick="return insertKonuWrapper(event, '+nodeID+', \''+nodeName+'\');">\n\
                                                                <i class="fa fa-save"></i> Kaydet </button>\n\
                                                            <button id="resetForm" class="btn btn-flat" type="reset" onclick="return resetDialog();" >\n\
                                                                <i class="fa fa-remove"></i> Reset </button>\n\
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
            $("#konuFormInsert").validationEngine();
            
            $("#mach-prod-box-popup").loadImager();
            $("#mach-prod-box-popup").loadImager('appendImage');
            
        var ajaxSubjectTypesPopup = $(window).ajaxCallWidget({
            proxy : 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
                    data: { url:'fillSubjectsTypes_sysSpecificDefinitions' ,
                    }
       })
        ajaxSubjectTypesPopup.ajaxCallWidget ({
            onError : function (event, textStatus,errorThrown) {
                dm.dangerMessage({
                   onShown : function() {
                       //$('#mach-prod-box').loadImager('removeLoadImage'); 
                   }
                });
                dm.dangerMessage('show', 'Konu Tipi Bulunamamıştır...',
                                         'Konu tipi bulunamamıştır...');
            },
            onSuccess : function (event, data) {
                var data = $.parseJSON(data);
                    $('#mach-prod-box-popup').loadImager('removeLoadImage');
                    $('#dropdownSubjectTypesPopup').ddslick({
                            height : 200,
                            data : data, 
                            width:'98%',
                            search : true,
                            //imagePosition:"right",
                            onSelected: function(selectedData){
                                if(selectedData.selectedData.value>0) {
                                    /*$('#tt_tree_menu').tree({
                                        url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=pkFillForAdminTree_leftnavigation&pk=' + $("#pk").val()+ '&role_id='+selectedData.selectedData.value+'&language_code='+$("#langCode").val(),
                                    });*/
                             }
                         }   
                    });  
                    /*$('#dropdownServiceTypesPopup').ddslick('selectByValue', 
                                                {index: ''+row.services_group_id+'' ,
                                                 text : ''+row.services_groups_name+''}
                                                );*/
                },
                onErrorDataNull : function (event, data) {
                     dm.dangerMessage({
                        onShown : function() {
                            //$('#mach-prod-box-popup').loadImager('removeLoadImage'); 
                        }
                     });
                     dm.dangerMessage('show', 'Konu Tipi Bulunamamıştır...',
                                              'Konu tipi bulunamamıştır...');
                 },
            }) 
            ajaxSubjectTypesPopup.ajaxCallWidget('call');
            
            
        },
        onhide : function() {
            $('#konuForm')[0].reset();
            regulateButtons();
        },
    });
    
    return false;
   }
   
   
   window.insertKonu = function (nodeID, nodeName) {  
        var loader = $("#loading-image-crud-popup").loadImager();
        loader.loadImager('appendImage');
        konu_name = $('#konu_name_popup').val();
        konu_abbreviation = $('#konu_abbreviation_popup').val(); 
        description = $('#description_popup').val();
        selectedTreeItem = $('#tt_tree_menu').tree('find', nodeID);
        var ddData = $('#dropdownSubjectTypesPopup').data('ddslick');
        subject_type_id = ddData.selectedData.value;
        //console.log(ddData);
        parent = nodeID;
       $.ajax({
           url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
           data: { url:'pkInsert_sysSubjects' ,
                   abbreviation : konu_abbreviation,
                   name : konu_name,
                   parent_id : parent,
                   description : description,
                   subject_type_id: subject_type_id, 
                   pk : $("#pk").val()},  
           type: 'GET',
           dataType: 'json',
           success: function (data, textStatus, jqXHR) {
               if(data.length!==0) {
                   if(data.found) {
                       BootstrapDialog.show({
                            type: BootstrapDialog.TYPE_SUCCESS,
                            title: 'Konu Kayıt İşlemi Başarılı...',
                            message: 'Konu kayıt işlemini gerçekleştirdiniz... ',
                            buttons: [ {
                                icon: 'glyphicon glyphicon-ok-sign',
                                label: 'Kapat',
                                cssClass: 'btn-success',
                                action: function(dialogItself){
                                    dialogItself.close();
                                    $('#konuFormInsert')[0].reset();
                                    loader.loadImager('removeLoadImage');
                                    $('#dropdownSubjectTypesPopup').ddslick('selectByValue', 
                                                    {index: '0'}
                                                    );
                                    regulateButtons();
                                }
                            }]
                        });
                        $('#tt_tree_menu').tree('append', {
                            parent: selectedTreeItem.target,
                            data: [{
                                    attributes:{notroot: true, 
                                                abbreviation: konu_abbreviation,
                                                description: description, 
                                                subject_type_id: subject_type_id, 
                                                active: 0,  
                                                },
                                    id: data.lastInsertId,
                                    text: konu_name,
                                    checked: false,
                                    state : 'open',
                                },]
                        });
                        
                   } else {
                       BootstrapDialog.show({
                            type: BootstrapDialog.TYPE_DANGER,
                            title: 'Konu Kayıt İşlemi Başarısız...',
                            message: 'Konu kayıt işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ',
                            buttons: [ {
                                icon: 'glyphicon glyphicon-ok-sign',
                                label: 'Kapat',
                                cssClass: 'btn-danger',
                                action: function(dialogItself){
                                    dialogItself.close();
                                    $('#konuForm')[0].reset();
                                }
                            }]
                        });
                   }
               } else {
                   console.error('"pkInsert_sysSubjects" servis datası boştur!!');
               }
           },
           error: function (jqXHR, textStatus, errorThrown) {           
               console.error('"pkInsert_sysSubjects" servis hatası->'+textStatus);
           }
       });
   }
   
   /**
    * insert topic root wrapper
    * @returns {Boolean}
    * @author Mustafa Zeynel Dağlı
    * @since 13/06/2017
    */
   window.insertKonuRootWrapper = function (e) {
    e.preventDefault();
    var nodeID = nodeID;
    var nodeName = nodeName;

    if ($("#konuForm").validationEngine('validate')) {
        var ddData = $('#dropdownSubjectTypes').data('ddslick');
        if(ddData.selectedData.value>0) {
            insertKonuRoot();
        } else {
            BootstrapDialog.show({
                title: 'Konu Tipi Seçiniz',
                message: 'Lütfen Konu Tipi Seçiniz!',
                type: BootstrapDialog.TYPE_WARNING,
        //        closable: false
            });
        }
        
    }
    return false;
   }
   
   /**
    * insert topic for root
    * @returns {Boolean}
    * @author Mustafa Zeynel Dağlı
    * @since 13/06/2017
    */
   window.insertKonuRoot = function () {
        var loader = $("#loading-image-crud").loadImager();
        loader.loadImager('appendImage');
        konu_name = $('#konu_name').val();
        konu_abbreviation = $('#konu_abbreviation').val();
        description = $('#description').val();
        var ddData = $('#dropdownSubjectTypes').data('ddslick');
        subject_type_id = ddData.selectedData.value;
        //console.log(ddData);
        
       $.ajax({
           url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
           data: { url:'pkInsert_sysSubjects' ,
                   abbreviation : konu_abbreviation,
                   name : konu_name,
                   description : description,
                   subject_type_id : subject_type_id,
                   parent : 0,
                   pk : $("#pk").val()},  
           type: 'GET',
           dataType: 'json',
           success: function (data, textStatus, jqXHR) {
               if(data.length!==0) {
                   if(data.found) {
                       BootstrapDialog.show({
                            type: BootstrapDialog.TYPE_SUCCESS,
                            title: 'Konu Kayıt İşlemi Başarılı...',
                            message: 'Konu kayıt işlemini gerçekleştirdiniz... ',
                            buttons: [ {
                                icon: 'glyphicon glyphicon-ok-sign',
                                label: 'Kapat',
                                cssClass: 'btn-success',
                                action: function(dialogItself){
                                    dialogItself.close();
                                    $('#konuForm')[0].reset();
                                    loader.loadImager('removeLoadImage');
                                    $('#dropdownSubjects').ddslick('selectByValue', 
                                                    {index: '-1'}
                                                    );
                                }
                            }]
                        });
                        $('#tt_tree_menu').tree('append', {
                            //parent: selectedTreeItem.target,
                            data: [{
                                    attributes:{notroot: false, 
                                                abbreviation: konu_abbreviation, 
                                                description: description,
                                                active: 0, 
                                                root : true,
                                                subject_type_id : subject_type_id
                                                },
                                    id: data.lastInsertId,
                                    text: konu_name,
                                    checked: false,
                                    state : 'open',
                                },]
                        });
                        
                        
                   } else {
                       BootstrapDialog.show({
                            type: BootstrapDialog.TYPE_DANGER,
                            title: 'Konu Kayıt İşlemi Başarısız...',
                            message: 'Konu kayıt işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ',
                            buttons: [ {
                                icon: 'glyphicon glyphicon-ok-sign',
                                label: 'Kapat',
                                cssClass: 'btn-danger',
                                action: function(dialogItself){
                                    dialogItself.close();
                                }
                            }]
                        });
                   }
                
               } else {
                   console.error('"pkInsert_sysSubjects" servis datası boştur!!');
               }
           },
           error: function (jqXHR, textStatus, errorThrown) {           
               console.error('"pkInsert_sysSubjects" servis hatası->'+textStatus);
           }
       });
   }
   
   /**
    * update topic item wrapper
    * @returns {Boolean}
    * @author Mustafa Zeynel Dağlı
    * @since 13/06/2017
    */
   window.updateKonuWrapper = function (e) {
    e.preventDefault();
    if ($("#konuForm").validationEngine('validate')) {
        selectedTreeItem = $('#tt_tree_menu').tree('getSelected');
        if(selectedTreeItem == null) {
            BootstrapDialog.show({
                title: 'Konu Ağacından Öğe Seçiniz',
                message: 'Lütfen Konu Ağacından Öğe Seçiniz!',
                type: BootstrapDialog.TYPE_WARNING,
            });
            return false;
        }
        var ddData = $('#dropdownSubjectTypes').data('ddslick');
        if(ddData.selectedData.value>0) {
            updateKonu();
        } else {
            BootstrapDialog.show({
                title: 'Konu Tipi Seçiniz',
                message: 'Lütfen Konu Tipi Seçiniz!',
                type: BootstrapDialog.TYPE_WARNING,
        //        closable: false
            });
            return false;
        }
        
        
    }
    return false;
   }
   
   /**
    * update topic item 
    * @returns {Boolean}
    * @author Mustafa Zeynel Dağlı
    * @since 13/06/2017
    */
   window.updateKonu = function () {
        var loader = $("#loading-image-crud").loadImager();
        loader.loadImager('appendImage');
        konu_name = $('#konu_name').val();
        konu_abbreviation = $('#konu_abbreviation').val();
        selectedTreeItem = $('#tt_tree_menu').tree('getSelected');
        description = $('#description').val();
        //console.log(selectedTreeItem);
        id = selectedTreeItem.id;
        var ddData = $('#dropdownSubjectTypes').data('ddslick');
        subject_type_id = ddData.selectedData.value;
        
       $.ajax({
           url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
           data: { url:'pkUpdate_sysSubjects' ,
                   abbreviation : konu_abbreviation,
                   name : konu_name,
                   description : description,
                   id : id,
                   subject_type_id : subject_type_id,
                   pk : $("#pk").val()}, 
           type: 'GET',
           dataType: 'json',
           success: function (data, textStatus, jqXHR) {
               if(data.length!==0) {
                   if(data.found) {
                       BootstrapDialog.show({
                            closable : false,
                            type: BootstrapDialog.TYPE_SUCCESS,
                            title: 'Konu Güncelleme İşlemi Başarılı...',
                            message: 'Konu güncelleme işlemini gerçekleştirdiniz... ',
                            buttons: [ {
                                icon: 'glyphicon glyphicon-ok-sign',
                                label: 'Kapat',
                                cssClass: 'btn-success',
                                action: function(dialogItself){
                                    dialogItself.close();
                                    regulateAfterUpdate();
                                    loader.loadImager('removeLoadImage');
                                    
                                }
                            }]
                        });
                   } else {
                       BootstrapDialog.show({
                            type: BootstrapDialog.TYPE_DANGER,
                            title: 'Konu Güncelleme İşlemi Başarısız...',
                            message: 'Konu güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ',
                            buttons: [ {
                                icon: 'glyphicon glyphicon-ok-sign',
                                label: 'Kapat',
                                cssClass: 'btn-danger',
                                action: function(dialogItself){
                                    dialogItself.close();
                                }
                            }]
                        });
                   }
                $('#tt_tree_menu').tree('update', {
                     target: selectedTreeItem.target,
                     text: konu_name,
                     attributes:{ 
                                abbreviation: konu_abbreviation, 
                                description : description,
                                subject_type_id : subject_type_id
                                },
                });
               } else {
                   console.error('"pkUpdate_sysSubjects" servis datası boştur!!');
               }
           },
           error: function (jqXHR, textStatus, errorThrown) {           
               console.error('"pkUpdate_sysSubjects" servis hatası->'+textStatus);
           }
       });
   }
   
   
   
});
