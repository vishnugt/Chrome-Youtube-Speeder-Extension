document.addEventListener('DOMContentLoaded', function() {

 
 var checkPageButton = document.getElementById('0.25x');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
    d = document;
     chrome.tabs.executeScript({
    code : 'javascript: var v = document.querySelector(\'video\'); v.playbackRate = 0.25'
 	 });
    });
  }, false);

  var checkPageButton = document.getElementById('0.5x');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
    d = document;
     chrome.tabs.executeScript({
    code : 'javascript: var v = document.querySelector(\'video\'); v.playbackRate = 0.5'
 	 });
    });
  }, false);

   var checkPageButton = document.getElementById('1x');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
    d = document;
     chrome.tabs.executeScript({
    code : 'javascript: var v = document.querySelector(\'video\'); v.playbackRate = 1'
 	 });
    });
  }, false);

 var checkPageButton = document.getElementById('2x');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
    d = document;
     chrome.tabs.executeScript({
    code : 'javascript: var v = document.querySelector(\'video\'); v.playbackRate = 2'
 	 });
    });
  }, false);


 var checkPageButton = document.getElementById('4x');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
    d = document;
     chrome.tabs.executeScript({
    code : 'javascript: var v = document.querySelector(\'video\'); v.playbackRate =6'
 	 });
    });
  }, false);

   var checkPageButton = document.getElementById('8x');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
    d = document;
     chrome.tabs.executeScript({
    code : 'javascript: var v = document.querySelector(\'video\'); v.playbackRate = 8'
 	 });
    });
  }, false);

 var checkPageButton = document.getElementById('10x');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
    d = document;
     chrome.tabs.executeScript({
    code : 'javascript: var v = document.querySelector(\'video\'); v.playbackRate = 10'
 	 });
    });
  }, false);



}, false)