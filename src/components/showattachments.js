SP.SOD.executeFunc('sp.js', 'null', getAttachments);

(function () {
  // Create object that have the context information about the field that we want to change it output render
  var attachmentsFiledContext = {};
  attachmentsFiledContext.Templates = {};
  attachmentsFiledContext.Templates.Fields = {
  "Attachments": { "View": AttachmentsFiledTemplate }
  };
  SPClientTemplates.TemplateManager.RegisterTemplateOverrides(attachmentsFiledContext);
})();

// This function provides the rendering logic for list view
function AttachmentsFiledTemplate(ctx) {
  var itemId = ctx.CurrentItem.ID;
  var listName = ctx.ListTitle;
  return getAttachments(listName, itemId);
}

//get attachments field properties
function getAttachments(listName,itemId) {
  var urlMod = '?web=1';
  var url = _spPageContextInfo.webAbsoluteUrl;
  var requestUri = url + "/_api/web/lists/getbytitle('" + listName + "')/items(" + itemId + ")/AttachmentFiles";
  var str = "";
  // execute AJAX request
    $.ajax({
    url: requestUri,
      type: "GET",
      headers: { "ACCEPT": "application/json;odata=verbose" },
      async: false,
      success: function (data) {
        for (var i = 0; i < data.d.results.length; i++) {
          str += "<a href='" + data.d.results[i].ServerRelativeUrl + urlMod + "'>" + data.d.results[i].FileName + "</a>";
          if (i != data.d.results.length - 1) {
            str += "<br/>";
          }
        }
      },
      error: function (err) {
      //alert(err);
      }
    });

  return str;
}
