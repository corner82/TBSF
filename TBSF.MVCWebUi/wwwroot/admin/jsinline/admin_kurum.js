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
    
    
/*
* 
* @type @call;$@call;tree
* Menu tree
* Mustafa Zeynel Dağlı
* 29/03/2016
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
     $('#kurum_name').val(selectedItem.text);
     $('#kurum_abbreviation').val(selectedItem.attributes.abbreviation);
     $('#description').val(selectedItem.attributes.description);
     $('#updateKurum').attr('disabled', false);
     $('#insertKurum').attr('disabled', true);

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
    
    

    var selectedNode;


    // Left menuyu oluşturmak için çağırılan fonksiyon...
    //$.fn.leftMenuFunction();

    //Validation forms binded...
    jQuery("#kurumForm").validationEngine();
    


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

    //$('#kurumForm').submit(newRoleSubmission);
    
   /**
    * wrapper class for pop up and active menu item
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 28/03/2016
    */
   window.deleteKurumDialog= function(nodeID){
       var nodeID = nodeID;
        BootstrapDialog.show({
            type: BootstrapDialog.TYPE_WARNING,
            title: 'Kurum Silme İşlemi Gerçekleştirmek Üzeresiniz!',
            message: 'Kurum Öğesini silmek üzeresiniz, kurum silme işlemi geri alınamaz!! ',
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
    * set entity item delete
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 11/06/2016
    */
   window.deleteKurum = function(nodeID) {
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
                        title: 'Kurum Silme İşlemi Başarısız...',
                        message: 'Kurum Silme işlemini gerçekleştiremediniz,Sistem Yneticisi ile temasa geçiniz... ',
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
                    title: 'Kurum Silme İşlemi Başarısız...',
                    message: 'Kurum Silme işlemini gerçekleştiremediniz,Sistem Yneticisi ile temasa geçiniz... ',
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
    * wrapper class for pop up and passive entity item
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 11/06/2016
    */
   window.passiveKurumDialog= function(nodeID){
        var nodeID = nodeID;
        BootstrapDialog.show({
            type: BootstrapDialog.TYPE_WARNING,
            title: 'Kurum Ögesini Pasifleştirmek Üzeresiniz!',
            message: 'Kurum öğesini pasifleştirmek üzeresiniz !! ',
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
                    passiveKurum(nodeID);
                }
            }]
        });
   }
   
   /**
    * set entity item passive
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 11/06/2016
    */
   window.passiveKurum = function(nodeID) {
       var loader = $("#loading-image-crud").loadImager();
       loader.loadImager('appendImage');
       selectedTreeItem = $('#tt_tree_menu').tree('find', nodeID);
       //selectedTreeItem = $('#tt_tree_menu').tree('find', nodeID);
       
       $.ajax({
        url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
        data: { url:'pkUpdateMakeActiveOrPassive_sysCorporation' ,
                id : nodeID,
                pk : $("#pk").val()}, 
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            if(data.length!==0) {
                if(data.found) {
                   BootstrapDialog.show({
                        type: BootstrapDialog.TYPE_SUCCESS,
                        title: 'Kurum Pasif İşlemi Başarılı...',
                        message: 'Kurum Pasifleştirme işlemini gerçekleştirdiniz... ',
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
                            
                 regulateButtons();   
                } else {
                    BootstrapDialog.show({
                        type: BootstrapDialog.TYPE_DANGER,
                        title: 'Kurum Pasifleştirme İşlemi Başarısız...',
                        message: 'Kurum pasifleştirme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ',
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
                    title: 'Kurum Pasifleştirme İşlemi Başarısız...',
                    message: 'Kurum pasifleştirme işlemini gerçekleştiremediniz,sistem yöneticisi ile temasa geçiniz... ',
                    buttons: [ {
                        icon: 'glyphicon glyphicon-ban-circle',
                        label: 'Kapat',
                        cssClass: 'btn-danger',
                        action: function(dialogItself){
                            dialogItself.close();
                        }
                    }]
                });
                console.error('"pkUpdateMakeActiveOrPassive_sysCorporation" servis datası boştur!!');
                regulateButtons();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {           
            console.error('"pkUpdateMakeActiveOrPassive_sysCorporation" servis hatası->'+textStatus);
        }
    });
   }
   
   /**
    * wrapper class for pop up and active entity item
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 11/06/2017
    */
   window.activeKurumDialog= function(nodeID){
        var nodeID = nodeID;
        BootstrapDialog.show({
            type: BootstrapDialog.TYPE_WARNING,
            title: 'Kurum Ögesini Aktifleştirmek Üzeresiniz!',
            message: 'Kurum öğesini aktifleştirmek üzeresiniz !! ',
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
                    activeKurum(nodeID);
                }
            }]
        });
   }
   
   /**
    * set entity item active
    * @param {integer} nodeID
    * @returns {null}
    * @author Mustafa Zeynel Dağlı
    * @since 11/06/2016
    */
   window.activeKurum = function(nodeID) {
       var loader = $("#loading-image-crud").loadImager();
       loader.loadImager('appendImage');
       selectedTreeItem = $('#tt_tree_menu').tree('find', nodeID);
       
       $.ajax({
        url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
        data: { url:'pkUpdateMakeActiveOrPassive_sysCorporation' ,
                id : nodeID,
                pk : $("#pk").val()}, 
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, jqXHR) {
            if(data.length!==0) {
                if(data.found) {
                    BootstrapDialog.show({
                    type: BootstrapDialog.TYPE_SUCCESS,
                    title: 'Kurum Aktifleştirme İşlemi Başarılı...',
                    message: 'Kurum aktifleştirme işlemini gerçekleştirdiniz... ',
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
                        title: 'Kurum Aktifleştirme İşlemi Başarısız...',
                        message: 'Kurum aktifleştirme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ',
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
                    title: 'Kurum Aktifleştirme İşlemi Başarısız...',
                    message: 'Kurum aktifleştirme işlemini gerçekleştiremediniz,sistem yöneticisi ile temasa geçiniz... ',
                    buttons: [ {
                        icon: 'glyphicon glyphicon-ban-circle',
                        label: 'Kapat',
                        cssClass: 'btn-danger',
                        action: function(dialogItself){
                            dialogItself.close();
                        }
                    }]
                });
                console.error('"pkUpdateMakeActiveOrPassive_sysCorporation" servis datası boştur!!');
                regulateButtons();
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {           
            console.error('"pkUpdateMakeActiveOrPassive_sysCorporation" servis hatası->'+textStatus);
        }
    });
   }
   
   /**
    * reset button function setting disabled/ enabled
    * for 'insert' and 'update' form buttons
    * @returns null
    * @author Mustafa Zeynel Dağlı
    * @since 11/06/2016
    */
   window.regulateButtons = function () {
       $('#updateKurum').attr('disabled', true);
       $('#insertKurum').attr('disabled', false);
       if($('#tt_tree_menu').tree('getSelected') != null) {
           var node = $('#tt_tree_menu').tree('getSelected');
           $('#tt_tree_menu').tree('unselect', node.target);
           //$('#tt_tree_menu').tree('uncheck', node.target);
       }
       $('#kurumForm').validationEngine('hide');
       //$('#tt_tree_menu').tree('unselect');
       $('#kurumForm')[0].reset();  
   }
   
   /**
    * reset action after update operation
    * @returns null
    * @author Mustafa Zeynel Dağlı
    * @since 12/06/2016
    */
   window.regulateAfterUpdate = function() {
       $('#kurumForm')[0].reset();
        $('#updateKurum').attr('disabled', true);
        $('#insertKurum').attr('disabled', false);
        if($('#tt_tree_menu').tree('getSelected') != null) {
            var node = $('#tt_tree_menu').tree('getSelected');
            $('#tt_tree_menu').tree('unselect', node.target);
        }
   }
   
   /**
    * reset action for dialog 'reset button'
    * @returns null
    * @author Mustafa Zeynel Dağlı
    * @since 12/06/2016
    */
   window.resetDialog = function() {
       $('#kurumFormInsert')[0].reset();
       $('#kurumFormInsert').validationEngine('hide');
       return false;
   }
   
   /**
    * insert Entity item
    * @returns {Boolean}
    * @author Mustafa Zeynel Dağlı
    * @since 11/06/2016
    */
   window.insertKurumWrapper = function (e, nodeID, nodeName) {
    e.preventDefault();
    var nodeID = nodeID;
    var nodeName = nodeName;

    if ($("#kurumFormInsert").validationEngine('validate')) {
        insertKurum(nodeID, nodeName);
    }
    return false;
   }
   
   window.insertKurumDialog = function (nodeID, nodeName) {
    var nodeID = nodeID;
    var nodeName = nodeName;
    BootstrapDialog.show({
        title: '"'+ nodeName + '" Kurum altına yeni kurum/müdürlük vs. eklemektesiniz...',
        message: function (dialogRef) {
                    var dialogRef = dialogRef;
                    var $message = $(' <div class="row">\n\
                                            <div class="col-md-12">\n\
                                                <div id="loading-image-crud-popup" class="box box-primary">\n\
                                                    <form id="kurumFormInsert" method="get" class="form-horizontal">\n\
                                                    <div class="hr-line-dashed"></div>\n\
                                                        <div class="form-group" style="margin-top: 20px;">\n\
                                                            <label class="col-sm-2 control-label">Kurum</label>\n\
                                                            <div class="col-sm-10">\n\
                                                                <div class="input-group">\n\
                                                                    <div class="input-group-addon">\n\
                                                                        <i class="fa fa-hand-o-right"></i>\n\
                                                                    </div>\n\
                                                                    <input data-prompt-position="topLeft:70" class="form-control validate[required]" type="text" name="kurum_name_popup" id="kurum_name_popup" placeholder="Kurum adı" />\n\
                                                                </div>\n\
                                                            </div>\n\
                                                        </div>\n\
                                                        <div class="form-group">\n\
                                                            <label class="col-sm-2 control-label">Kurum(Kısaltma vs.)</label>\n\
                                                            <div class="col-sm-10">\n\
                                                                <div class="input-group">\n\
                                                                    <div class="input-group-addon">\n\
                                                                        <i class="fa fa-hand-o-right"></i>\n\
                                                                    </div>\n\
                                                                    <input data-prompt-position="topLeft:70" class="form-control validate[required]" type="text" name="kurum_abbreviation_popup" id="kurum_abbreviation_popup" placeholder="Kurum adı kısaltma" />\n\
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
                                                            <button id="insertKurumPopUp" class="btn btn-primary" type="submit" onclick="return insertKurumWrapper(event, '+nodeID+', \''+nodeName+'\');">\n\
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
            $("#kurumFormInsert").validationEngine();
        },
        onhide : function() {
            $('#kurumForm')[0].reset();
            regulateButtons();
        },
    });
    
    return false;
   }
   
   
   window.insertKurum = function (nodeID, nodeName) {  
        var loader = $("#loading-image-crud-popup").loadImager();
        loader.loadImager('appendImage');
        kurum_name = $('#kurum_name_popup').val();
        kurum_abbreviation = $('#kurum_abbreviation_popup').val(); 
        description = $('#description_popup').val();
        selectedTreeItem = $('#tt_tree_menu').tree('find', nodeID);

        //console.log(ddData);
        parent = nodeID;
       $.ajax({
           url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
           data: { url:'pkInsert_sysCorporation' ,
                   abbreviation : kurum_abbreviation,
                   name : kurum_name,
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
                            title: 'Kurum Kayıt İşlemi Başarılı...',
                            message: 'Kurum kayıt işlemini gerçekleştirdiniz... ',
                            buttons: [ {
                                icon: 'glyphicon glyphicon-ok-sign',
                                label: 'Kapat',
                                cssClass: 'btn-success',
                                action: function(dialogItself){
                                    dialogItself.close();
                                    $('#kurumFormInsert')[0].reset();
                                    $('#kurumForm')[0].reset();
                                    loader.loadImager('removeLoadImage');
                                    regulateButtons();
                                }
                            }]
                        });
                        $('#tt_tree_menu').tree('append', {
                            parent: selectedTreeItem.target,
                            data: [{
                                    attributes:{notroot: true, 
                                                abbreviation: kurum_abbreviation,
                                                description: description, 
                                                active: 0,  
                                                },
                                    id: data.lastInsertId,
                                    text: kurum_name,
                                    checked: false,
                                    state : 'open',
                                },]
                        });
                        
                   } else {
                       BootstrapDialog.show({
                            type: BootstrapDialog.TYPE_DANGER,
                            title: 'Kurum Kayıt İşlemi Başarısız...',
                            message: 'Kurum kayıt işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ',
                            buttons: [ {
                                icon: 'glyphicon glyphicon-ok-sign',
                                label: 'Kapat',
                                cssClass: 'btn-danger',
                                action: function(dialogItself){
                                    dialogItself.close();
                                    $('#kurumForm')[0].reset();
                                }
                            }]
                        });
                   }
               } else {
                   console.error('"pkInsert_sysCorporation" servis datası boştur!!');
               }
           },
           error: function (jqXHR, textStatus, errorThrown) {           
               console.error('"pkInsert_sysCorporation" servis hatası->'+textStatus);
           }
       });
   }
   
   /**
    * insert entity wrapper
    * @returns {Boolean}
    * @author Mustafa Zeynel Dağlı
    * @since 28/03/2016
    */
   window.insertKurumRootWrapper = function (e) {
    e.preventDefault();
    var nodeID = nodeID;
    var nodeName = nodeName;

    if ($("#kurumForm").validationEngine('validate')) {
        insertKurumRoot();
    }
    return false;
   }
   
   /**
    * insert entity for root
    * @returns {Boolean}
    * @author Mustafa Zeynel Dağlı
    * @since 12/06/2016
    */
   window.insertKurumRoot = function () {
        var loader = $("#loading-image-crud").loadImager();
        loader.loadImager('appendImage');
        kurum_name = $('#kurum_name').val();
        kurum_abbreviation = $('#kurum_abbreviation').val();
        description = $('#description').val();
        //console.log(ddData);
        
       $.ajax({
           url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
           data: { url:'pkInsert_sysCorporation' ,
                   abbreviation : kurum_abbreviation,
                   name : kurum_name,
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
                            title: 'Kurum Kayıt İşlemi Başarılı...',
                            message: 'Kurum kayıt işlemini gerçekleştirdiniz... ',
                            buttons: [ {
                                icon: 'glyphicon glyphicon-ok-sign',
                                label: 'Kapat',
                                cssClass: 'btn-success',
                                action: function(dialogItself){
                                    dialogItself.close();
                                    $('#kurumForm')[0].reset();
                                    loader.loadImager('removeLoadImage');
                                }
                            }]
                        });
                        $('#tt_tree_menu').tree('append', {
                            //parent: selectedTreeItem.target,
                            data: [{
                                    attributes:{notroot: false, 
                                                abbreviation: kurum_abbreviation, 
                                                description: description,
                                                active: 0, 
                                                root : true,
                                                logo : null,
                                                },
                                    id: data.lastInsertId,
                                    text: kurum_name,
                                    checked: false,
                                    state : 'open',
                                },]
                        });
                        
                        
                   } else {
                       BootstrapDialog.show({
                            type: BootstrapDialog.TYPE_DANGER,
                            title: 'Kurum Kayıt İşlemi Başarısız...',
                            message: 'Kurum kayıt işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ',
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
                   console.error('"pkInsert_sysCorporation" servis datası boştur!!');
               }
           },
           error: function (jqXHR, textStatus, errorThrown) {           
               console.error('"pkInsert_sysCorporation" servis hatası->'+textStatus);
           }
       });
   }
   
   /**
    * update entity item wrapper
    * @returns {Boolean}
    * @author Mustafa Zeynel Dağlı
    * @since 12/06/2017
    */
   window.updateKurumWrapper = function (e) {
    e.preventDefault();
    if ($("#kurumForm").validationEngine('validate')) {
        selectedTreeItem = $('#tt_tree_menu').tree('getSelected');
        if(selectedTreeItem == null) {
            BootstrapDialog.show({
                title: 'Kurum Ağacından Öğe Seçiniz',
                message: 'Lütfen Kurum Ağacından Öğe Seçiniz!',
                type: BootstrapDialog.TYPE_WARNING,
            });
            return false;
        }
        updateKurum();
    }
    return false;
   }
   
   /**
    * update entity item 
    * @returns {Boolean}
    * @author Mustafa Zeynel Dağlı
    * @since 12/06/2017
    */
   window.updateKurum = function () {
        var loader = $("#loading-image-crud").loadImager();
        loader.loadImager('appendImage');
        kurum_name = $('#kurum_name').val();
        kurum_abbreviation = $('#kurum_abbreviation').val();
        selectedTreeItem = $('#tt_tree_menu').tree('getSelected');
        description = $('#description').val();
        //console.log(selectedTreeItem);
        id = selectedTreeItem.id;
        
       $.ajax({
           url: 'https://proxy.sorubankasi.com/SlimProxyBoot.php',
           data: { url:'pkUpdate_sysCorporation' ,
                   abbreviation : kurum_abbreviation,
                   name : kurum_name,
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
                            title: 'Kurum Güncelleme İşlemi Başarılı...',
                            message: 'Kurum güncelleme işlemini gerçekleştirdiniz... ',
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
                            title: 'Kurum Güncelleme İşlemi Başarısız...',
                            message: 'Kurum güncelleme işlemi başarısız, sistem yöneticisi ile temasa geçiniz... ',
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
                     text: kurum_name,
                     attributes:{ 
                                abbreviation: kurum_abbreviation, 
                                description : description,
                                },
                });
               } else {
                   console.error('"pkUpdate_sysCorporation" servis datası boştur!!');
               }
           },
           error: function (jqXHR, textStatus, errorThrown) {           
               console.error('"pkUpdate_sysCorporation" servis hatası->'+textStatus);
           }
       });
   }
   
   
   
});
