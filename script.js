var curdate = Date.now();
var startdate = new Date('2020-01-01').getTime();
var enddate = new Date('2020-12-31').getTime();
var diff = enddate - startdate;
var progress = curdate - startdate;
progress = (progress / diff) * 100;
if(progress>100){
    progress=100;
}
window.onload = function () {
    document.getElementById("seconddiv").style.width = progress + "%";

    $("#firstdiv").hover(
        function () {
            $(this).css("background-color", "white");
        },
        function () {
            $(this).css("background-color", "#555");
        }
    );

    $("#seconddiv").hover(
        function () {
            $(this).css("background-color", "green");
        },
        function () {
            $(this).css("background-color", "red");
        }
    );
};
