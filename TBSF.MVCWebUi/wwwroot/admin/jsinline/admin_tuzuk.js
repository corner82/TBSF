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
 
    
        var sm  = $(window).successMessage();
var dm  = $(window).dangerMessage();
var wm  = $(window).warningMessage();
var wcm = $(window).warningComplexMessage({ denyButtonLabel : 'Vazgeç' ,
                                           actionButtonLabel : 'İşleme devam et'});
    
    
/*
* 
* @type @call;$@call;tree
* Menu tree
* Mustafa Zeynel Dağlı
* 29/03/2016
*/

$('#tt_tree_menu').tree({
url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=fillLawsTree_sysLaws&pk=' + $("#pk").val()+ '&language_code='+$("#langCode").val(),
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
     $('#tuzuk_name').val(selectedItem.text);
     $('#tuzuk_abbreviation').val(selectedItem.attributes.abbreviation);
     $('#description').val(selectedItem.attributes.description);
     $('#updateTuzuk').attr('disabled', false);
     $('#insertTuzuk').attr('disabled', true);

 },
 formatter: function (node) {
     var s = node.text;
     var id = node.id;
     if (node.attributes.active == 0) {
         s += '&nbsp;<i class="fa fa-fw fa-trash-o" title="tüzük sil" onclick="deleteTuzukDialog('+id+')"></i>&nbsp;\n\
              <i class="fa fa-fw fa-ban" title="pasif yap" onclick="passiveTuzukDialog('+id+');"></i>&nbsp;&nbsp;\n\
             <i class="fa fa-level-down" title="alt kırılıma tüzük ekle" onclick="insertTuzukDialog('+id+', \''+node.text+'\')"></i>';
         return s;

     } else if (node.attributes.active == 1) {
         s += '&nbsp;<i class="fa fa-fw fa-trash-o" title="tüzük sil" onclick="deleteTuzukDialog('+id+')"></i>&nbsp;\n\
         <i class="fa fa-fw fa-check-square-o" title="aktif yap" onclick="activeTuzukDialog('+id+');"></i>';
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
* @type @call;$@call;tree
* Law tree
* Mustafa Zeynel Dağlı
* 03/07/2017
*/
$('#tt_tree_law').tree({
url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=fillLawsTree_sysLaws&pk=' + $("#pk").val()+ '&language_code='+$("#langCode").val(),
method: 'get',
animate: true,
checkbox: false,
cascadeCheck: false,
lines: true,   
onSelect: function(node){
    $("#secili_kanun").val(node.text);
    $("#secili_kanun").attr("attribute_law_id", node.id);
},
 onLoadSuccess: function (node, data) {  
     if(data.length>0) {
        loaderKanun.loadImager('removeLoadImage'); 
     }
 },
 onClick: function (node) {
 },
 
});

    var selectedNode;


    // Left menuyu oluşturmak için çağırılan fonksiyon...
    //$.fn.leftMenuFunction();

    //Validation forms binded...
    jQuery("#tuzukForm").validationEngine();
    


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
    
    /**
     * loading iamge for laws tree
     * @type @call;$@call;loadImager|@call;$@call;loadImager
     * @since 03/07/2017
     */
    var loaderKanun = $("#loading-image-kanun").loadImager();
    loader.loadImager('appendImage');

    //$('#tuzukForm').submit(newRoleSubmission);
    
   /**
    * wrapper class for pop up and delete requlation item
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 01/07/2017
    */
   window.deleteTuzukDialog= function(nodeID){
       var nodeID = nodeID;
        BootstrapDialog.show({
            type: BootstrapDialog.TYPE_WARNING,
            title: 'Tüzük Silme İşlemi Gerçekleştirmek Üzeresiniz!',
            message: 'Tüzük Öğesini silmek üzeresiniz, tüzük silme işlemi geri alınamaz!! ',
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
                    deleteKurum(nodeID);
                }
            }]
        });
   }
   
   /**
    * set law item delete
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 13/06/2017
    * @todo delete servis eklenecek
    */
   window.deleteTuzuk = function(nodeID) {
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
                        title: 'Tüzük Silme İşlemi Başarılı...',
                        message: 'Tüzük Silme işlemini gerçekleştirdiniz... ',
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
                        title: 'Tüzük Silme İşlemi Başarısız...',
                        message: 'Tüzük Silme işlemini gerçekleştiremediniz,sistem yöneticisi ile temasa geçiniz... ',
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
                    title: 'Tüzük Silme İşlemi Başarısız...',
                    message: 'Tüzük Silme işlemini gerçekleştiremediniz,sistem yöneticisi ile temasa geçiniz... ',
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
    * wrapper class for pop up and passive requlation item
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 01/07/2017
    */
   window.passiveTuzukDialog= function(nodeID){
        var nodeID = nodeID;
        BootstrapDialog.show({
            type: BootstrapDialog.TYPE_WARNING,
            title: 'Tüzük Ögesini Pasifleştirmek Üzeresiniz!',
            message: 'Tüzük öğesini pasifleştirmek üzeresiniz !! ',
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
                    passiveKanun(nodeID);
                }
            }]
        });
   }
   
   /**
    * set requlation item passive
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 01/07/2017
    */
   window.passiveKanun = function(nodeID) {
       var loader = $("#loading-image-crud").loadImager();
       loader.loadImager('appendImage');
       selectedTreeItem = $('#tt_tree_menu').tree('find', nodeID);
       //selectedTreeItem = $('#tt_tree_menu').tree('find', nodeID);
       
       $.ajax({
        url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
        data: { url:'pkUpdateMakeActiveOrPassive_sysLaws' ,
                id : nodeID,
                pk : $("#pk").val()}, 
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            if(data.length!==0) {
                if(data.found) {
                   BootstrapDialog.show({
                        type: BootstrapDialog.TYPE_SUCCESS,
                        title: 'Tüzük Pasif İşlemi Başarılı...',
                        message: 'Tüzük Pasifleştirme işlemini gerçekleştirdiniz... ',
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
                                                description: node.attributes.description },
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
                                                description: node.attributes.description},
                                    id: node.id,
                                    text: node.text,
                                    checked: false,
                                    state : nodeState,
                                },]
                        });
                    }
                            
                    
                } else {
                    BootstrapDialog.show({
                        type: BootstrapDialog.TYPE_DANGER,
                        title: 'Tüzük Pasifleştirme İşlemi Başarısız...',
                        message: 'Tüzük pasifleştirme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ',
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
                regulateButtons();
            } else {
                BootstrapDialog.show({
                    type: BootstrapDialog.TYPE_DANGER,
                    title: 'Tüzük Pasifleştirme İşlemi Başarısız...',
                    message: 'Tüzük pasifleştirme işlemini gerçekleştiremediniz,sistem yöneticisi ile temasa geçiniz... ',
                    buttons: [ {
                        icon: 'glyphicon glyphicon-ban-circle',
                        label: 'Kapat',
                        cssClass: 'btn-danger',
                        action: function(dialogItself){
                            dialogItself.close();
                        }
                    }]
                });
                regulateButtons();
                console.error('"pkUpdateMakeActiveOrPassive_sysLaws" servis datası boştur!!');
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {           
            console.error('"pkUpdateMakeActiveOrPassive_sysLaws" servis hatası->'+textStatus);
        }
    });
   }
   
   /**
    * wrapper class for pop up and active requlation item
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 01/07/2017
    */
   window.activeTuzukDialog= function(nodeID){
        var nodeID = nodeID;
        BootstrapDialog.show({
            type: BootstrapDialog.TYPE_WARNING,
            title: 'Tüzük Ögesini Aktifleştirmek Üzeresiniz!',
            message: 'Tüzük öğesini aktifleştirmek üzeresiniz !! ',
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
                    activeKanun(nodeID);
                }
            }]
        });
   }
   
   /**
    * set requlation item active
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 01/07/2017
    */
   window.activeKanun = function(nodeID) {
       var loader = $("#loading-image-crud").loadImager();
       loader.loadImager('appendImage');
       selectedTreeItem = $('#tt_tree_menu').tree('find', nodeID);
       
       $.ajax({
        url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
        data: { url:'pkUpdateMakeActiveOrPassive_sysLaws' ,
                id : nodeID,
                pk : $("#pk").val()}, 
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            if(data.length!==0) {
                if(data.found) {
                    BootstrapDialog.show({
                    type: BootstrapDialog.TYPE_SUCCESS,
                    title: 'Tüzük Aktifleştirme İşlemi Başarılı...',
                    message: 'Tüzük aktifleştirme işlemini gerçekleştirdiniz... ',
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
                                            description: node.attributes.description},
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
                                            description: node.attributes.description},
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
                        title: 'Tüzük Aktifleştirme İşlemi Başarısız...',
                        message: 'Tüzük aktifleştirme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ',
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
                    title: 'Tüzük Aktifleştirme İşlemi Başarısız...',
                    message: 'Tüzük aktifleştirme işlemini gerçekleştiremediniz,sistem yöneticisi ile temasa geçiniz... ',
                    buttons: [ {
                        icon: 'glyphicon glyphicon-ban-circle',
                        label: 'Kapat',
                        cssClass: 'btn-danger',
                        action: function(dialogItself){
                            dialogItself.close();
                        }
                    }]
                });
                console.error('"pkUpdateMakeActiveOrPassive_sysLaws" servis datası boştur!!');
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {           
            console.error('"pkUpdateMakeActiveOrPassive_sysLaws" servis hatası->'+textStatus);
        }
    });
   }
   
   /**
    * reset button function setting disabled/ enabled
    * for 'insert' and 'update' form buttons
    * @returns null
    * @author Mustafa Zeynel Dağlı
    * @since 01/07/2017
    */
   window.regulateButtons = function () {
       $('#updateTuzuk').attr('disabled', true);
       $('#insertTuzuk').attr('disabled', false);
       if($('#tt_tree_menu').tree('getSelected') != null) {
           var node = $('#tt_tree_menu').tree('getSelected');
           $('#tt_tree_menu').tree('unselect', node.target);
           //$('#tt_tree_menu').tree('uncheck', node.target);
       }
       $('#tuzukForm').validationEngine('hide');
       //$('#tt_tree_menu').tree('unselect');
       $('#tuzukForm')[0].reset();  
   }
   
   /**
    * reset action after update operation
    * @returns null
    * @author Mustafa Zeynel Dağlı
    * @since 01/07/2017
    */
   window.regulateAfterUpdate = function() {
       $('#tuzukForm')[0].reset();
        $('#updateTuzuk').attr('disabled', true);
        $('#insertTuzuk').attr('disabled', false);
        if($('#tt_tree_menu').tree('getSelected') != null) {
            var node = $('#tt_tree_menu').tree('getSelected');
            $('#tt_tree_menu').tree('unselect', node.target);
        }
   }
   
   /**
    * reset action for dialog 'reset button'
    * @returns null
    * @author Mustafa Zeynel Dağlı
    * @since 01/07/2017
    */
   window.resetDialog = function() {
       $('#tuzukFormInsert')[0].reset();
       $('#tuzukFormInsert').validationEngine('hide');
       return false;
   }
   
   /**
    * insert requlation item dialog wrapper
    * @returns {Boolean}
    * @author Mustafa Zeynel Dağlı
    * @since 01/07/2017
    */
   window.insertTuzukWrapper = function (e, nodeID, nodeName) {
    e.preventDefault();
    var nodeID = nodeID;
    var nodeName = nodeName;

    if ($("#tuzukFormInsert").validationEngine('validate')) {
        if($('#tt_tree_law_popup').tree('getSelected') === null) {
            wm.warningMessage('resetOnShown');
            wm.warningMessage('show', 'Kanun Seçiniz', 'Lütfen kanun  seçiniz!');
            return false;
        }
        //insertTuzuk(nodeID, nodeName);
    }
    return false;
   }
   
   /**
    * insert requlation item dialog 
    * @returns {Boolean}
    * @author Mustafa Zeynel Dağlı
    * @since 01/07/2017
    */
   window.insertTuzukDialog = function (nodeID, nodeName) {
    var nodeID = nodeID;
    var nodeName = nodeName;
    BootstrapDialog.show({
        title: '"'+ nodeName + '" Kanun altına yeni kurum/müdürlük vs. eklemektesiniz...',
        message: function (dialogRef) {
                    var dialogRef = dialogRef;
                    var $message = $(' <div class="row">\n\
                                            <div class="col-md-12">\n\
                                                <div id="loading-image-crud-popup" class="box box-primary">\n\
                                                    <form id="tuzukFormInsert" method="get" class="form-horizontal">\n\
                                                    <div class="hr-line-dashed"></div>\n\
                                                        <div class="form-group" style="margin-top: 20px;">\n\
                                                            <label class="col-sm-2 control-label">Tüzük Başlık</label>\n\
                                                            <div class="col-sm-10">\n\
                                                                <div class="input-group">\n\
                                                                    <div class="input-group-addon">\n\
                                                                        <i class="fa fa-hand-o-right"></i>\n\
                                                                    </div>\n\
                                                                    <input data-prompt-position="topLeft:70" class="form-control validate[required]" type="text" name="tuzuk_name_popup" id="tuzuk_name_popup" placeholder="Tüzük başlık" />\n\
                                                                </div>\n\
                                                            </div>\n\
                                                        </div>\n\
                                                        <div class="form-group">\n\
                                                            <label class="col-sm-2 control-label">Tüzük İçerik</label>\n\
                                                            <div class="col-sm-10">\n\
                                                                <div class="input-group">\n\
                                                                    <div class="input-group-addon">\n\
                                                                        <i class="fa fa-hand-o-right"></i>\n\
                                                                    </div>\n\
                                                                    <input data-prompt-position="topLeft:70" class="form-control validate[required]" type="text" name="tuzuk_abbreviation_popup" id="tuzuk_abbreviation_popup" placeholder="Tüzük içerik" />\n\
                                                                </div>\n\
                                                            </div>\n\
                                                        </div>\n\
                                                        <div class="form-group">\n\
                                                            <label class="col-sm-2 control-label">Kanunlar</label>\n\
                                                            <div class="col-sm-10">\n\
                                                                <div id="loading-image-popup" class="input-group">\n\
                                                                    <div class="input-group-addon">\n\
                                                                        <i class="fa fa-hand-o-right"></i>\n\
                                                                    </div>\n\
                                                                    <div >\n\
                                                                        <ul id="tt_tree_law_popup" class="easyui-tree" ></ul>\n\
                                                                    </div>\
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
                                                            <button id="insertTuzukPopUp" class="btn btn-primary" type="submit" onclick="return insertTuzukWrapper(event, '+nodeID+', \''+nodeName+'\');">\n\
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
            $("#tuzukFormInsert").validationEngine();
            
            $("#loading-image-popup").loadImager();
            $("#loading-image-popup").loadImager('appendImage');
            
            $('#tt_tree_law_popup').tree({
            url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php?url=fillLawsTree_sysLaws&pk=' + $("#pk").val()+ '&language_code='+$("#langCode").val(),
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
                /*$("#secili_kanun").val(node.text);
                $("#secili_kanun").attr("attribute_law_id", node.id);*/
            },
           });
            
        },
        onhide : function() {
            $('#yonetmelikForm')[0].reset();
            regulateButtons();
        
        },
        onhide : function() {
            $('#tuzukForm')[0].reset();
            regulateButtons();
        },
    });
    
    return false;
   }
   
   /**
    * insert requlation item as child node
    * @returns {Boolean}
    * @author Mustafa Zeynel Dağlı
    * @since 01/07/2017
    */
   window.insertTuzuk = function (nodeID, nodeName) {  
        var loader = $("#loading-image-crud-popup").loadImager();
        loader.loadImager('appendImage');
        tuzuk_name = $('#tuzuk_name_popup').val();
        tuzuk_abbreviation = $('#tuzuk_abbreviation_popup').val(); 
        description = $('#description_popup').val();
        selectedTreeItem = $('#tt_tree_menu').tree('find', nodeID);

        //console.log(ddData);
        parent = nodeID;
       $.ajax({
           url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
           data: { url:'pkInsert_sysLaws' ,
                   abbreviation : tuzuk_abbreviation,
                   name : tuzuk_name,
                   parent_id : parent,
                   description : description,
                   pk : $("#pk").val()},  
           type: 'GET',
           dataType: 'json',
           success: function (data, textStatus, jqXHR) {
               if(data.length!==0) {
                   if(data.found) {
                       BootstrapDialog.show({
                            type: BootstrapDialog.TYPE_SUCCESS,
                            title: 'Tüzük Kayıt İşlemi Başarılı...',
                            message: 'Tüzük kayıt işlemini gerçekleştirdiniz... ',
                            buttons: [ {
                                icon: 'glyphicon glyphicon-ok-sign',
                                label: 'Kapat',
                                cssClass: 'btn-success',
                                action: function(dialogItself){
                                    dialogItself.close();
                                    $('#tuzukFormInsert')[0].reset();
                                    $('#tuzukForm')[0].reset();
                                    loader.loadImager('removeLoadImage');
                                    regulateButtons();
                                }
                            }]
                        });
                        $('#tt_tree_menu').tree('append', {
                            parent: selectedTreeItem.target,
                            data: [{
                                    attributes:{notroot: true, 
                                                abbreviation: tuzuk_abbreviation,
                                                description: description, 
                                                active: 0,  
                                                },
                                    id: data.lastInsertId,
                                    text: tuzuk_name,
                                    checked: false,
                                    state : 'open',
                                },]
                        });
                        
                   } else {
                       BootstrapDialog.show({
                            type: BootstrapDialog.TYPE_DANGER,
                            title: 'Tüzük Kayıt İşlemi Başarısız...',
                            message: 'Tüzük kayıt işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ',
                            buttons: [ {
                                icon: 'glyphicon glyphicon-ok-sign',
                                label: 'Kapat',
                                cssClass: 'btn-danger',
                                action: function(dialogItself){
                                    dialogItself.close();
                                    $('#tuzukForm')[0].reset();
                                }
                            }]
                        });
                   }
               } else {
                   console.error('"pkInsert_sysLaws" servis datası boştur!!');
               }
           },
           error: function (jqXHR, textStatus, errorThrown) {           
               console.error('"pkInsert_sysLaws" servis hatası->'+textStatus);
           }
       });
   }
   
   /**
    * insert requlation as root  wrapper
    * @returns {Boolean}
    * @author Mustafa Zeynel Dağlı
    * @since 01/07/2017
    */
   window.insertTuzukRootWrapper = function (e) {
    e.preventDefault();
    var nodeID = nodeID;
    var nodeName = nodeName;

    if ($("#tuzukForm").validationEngine('validate')) {
        
        if($("#secili_kanun").attr("attribute_law_id")===null || $("#secili_kanun").attr("attribute_law_id")<=0) {
            wm.warningMessage('resetOnShown');
            wm.warningMessage('show', 'Kanun Seçiniz', 'Lütfen kanun  seçiniz!');
            return false;
        }
        
        if($('#tt_tree_law').tree('getSelected') === null) {
            wm.warningMessage('resetOnShown');
            wm.warningMessage('show', 'Kanun Seçiniz', 'Lütfen kanun  seçiniz!');
            return false;
        }
        //insertTuzukRoot();
    }
    return false;
   }
   
   /**
    * insert requlation for root
    * @returns {Boolean}
    * @author Mustafa Zeynel Dağlı
    * @since 01/07/2017
    */
   window.insertTuzukRoot = function () {
        var loader = $("#loading-image-crud").loadImager();
        loader.loadImager('appendImage');
        tuzuk_name = $('#tuzuk_name').val();
        tuzuk_abbreviation = $('#tuzuk_abbreviation').val();
        description = $('#description').val();
        //console.log(ddData);
        
       $.ajax({
           url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
           data: { url:'pkInsert_sysLaws' ,
                   abbreviation : tuzuk_abbreviation,
                   name : tuzuk_name,
                   description : description,
                   parent : 0,
                   pk : $("#pk").val()},  
           type: 'GET',
           dataType: 'json',
           success: function (data, textStatus, jqXHR) {
               if(data.length!==0) {
                   if(data.found) {
                       BootstrapDialog.show({
                            type: BootstrapDialog.TYPE_SUCCESS,
                            title: 'Tüzük Kayıt İşlemi Başarılı...',
                            message: 'Tüzük kayıt işlemini gerçekleştirdiniz... ',
                            buttons: [ {
                                icon: 'glyphicon glyphicon-ok-sign',
                                label: 'Kapat',
                                cssClass: 'btn-success',
                                action: function(dialogItself){
                                    dialogItself.close();
                                    $('#tuzukForm')[0].reset();
                                    loader.loadImager('removeLoadImage');
                                }
                            }]
                        });
                        $('#tt_tree_menu').tree('append', {
                            //parent: selectedTreeItem.target,
                            data: [{
                                    attributes:{notroot: false, 
                                                abbreviation: tuzuk_abbreviation, 
                                                description: description,
                                                active: 0, 
                                                root : true,
                                                logo : null,
                                                },
                                    id: data.lastInsertId,
                                    text: tuzuk_name,
                                    checked: false,
                                    state : 'open',
                                },]
                        });
                        
  
                   } else {
                       BootstrapDialog.show({
                            type: BootstrapDialog.TYPE_DANGER,
                            title: 'Tüzük Kayıt İşlemi Başarısız...',
                            message: 'Tüzük kayıt işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ',
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
                   console.error('"pkInsert_sysLaws" servis datası boştur!!');
               }
           },
           error: function (jqXHR, textStatus, errorThrown) {           
               console.error('"pkInsert_sysLaws" servis hatası->'+textStatus);
           }
       });
   }
   
   /**
    * update requlation item wrapper
    * @returns {Boolean}
    * @author Mustafa Zeynel Dağlı
    * @since 01/07/2017
    */
   window.updateTuzukWrapper = function (e) {
    e.preventDefault();
    if ($("#tuzukForm").validationEngine('validate')) {
        selectedTreeItem = $('#tt_tree_menu').tree('getSelected');
        if(selectedTreeItem == null) {
            BootstrapDialog.show({
                title: 'Tüzük Ağacından Öğe Seçiniz',
                message: 'Lütfen Tüzük Ağacından Öğe Seçiniz!',
                type: BootstrapDialog.TYPE_WARNING,
            });
            return false;
        }
        updateTuzuk();
    }
    return false;
   }
   
   /**
    * update requlation item 
    * @returns {Boolean}
    * @author Mustafa Zeynel Dağlı
    * @since 01/07/2017
    */
   window.updateTuzuk = function () {
        var loader = $("#loading-image-crud").loadImager();
        loader.loadImager('appendImage');
        tuzuk_name = $('#tuzuk_name').val();
        tuzuk_abbreviation = $('#tuzuk_abbreviation').val();
        selectedTreeItem = $('#tt_tree_menu').tree('getSelected');
        description = $('#description').val();
        //console.log(selectedTreeItem);
        id = selectedTreeItem.id;
        
       $.ajax({
           url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
           data: { url:'pkUpdate_sysLaws' ,
                   abbreviation : tuzuk_abbreviation,
                   name : tuzuk_name,
                   description : description,
                   id : id,
                   pk : $("#pk").val()}, 
           type: 'GET',
           dataType: 'json',
           success: function (data, textStatus, jqXHR) {
               if(data.length!==0) {
                   if(data.found) {
                       BootstrapDialog.show({
                            closable : false,
                            type: BootstrapDialog.TYPE_SUCCESS,
                            title: 'Tüzük Güncelleme İşlemi Başarılı...',
                            message: 'Tüzük güncelleme işlemini gerçekleştirdiniz... ',
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
                            title: 'Tüzük Güncelleme İşlemi Başarısız...',
                            message: 'Tüzük güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ',
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
                     text: tuzuk_name,
                     attributes:{ 
                                abbreviation: tuzuk_abbreviation, 
                                description : description,
                                },
                });
               } else {
                   console.error('"pkUpdate_sysLaws" servis datası boştur!!');
               }
           },
           error: function (jqXHR, textStatus, errorThrown) {           
               console.error('"pkUpdate_sysLaws" servis hatası->'+textStatus);
           }
       });
   }
   
   
   
});
