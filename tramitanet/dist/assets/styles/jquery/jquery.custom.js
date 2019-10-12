$(document).ready(function () {


        $(".nav-item-hold").on("click", function (event) {
            console.log(event.target);
            var clickedBtnID = $(this).attr('class'); // or var clickedBtnID = this.id
            alert('you clicked on button #' + event.target);
        });



});
