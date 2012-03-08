//https://gist.github.com/572517
// using jQuery:
$("#<%= ButtonId.ClientID %>").unbind("click").bind("click", function () {
  if (someCondition) {
    // call postback event:
    //__doPostBack(this.id.replace(/\_/, "$"),'');
    return true;
  } else {
    return false;
  }
});