
function ModalInput() {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    modal.style.zIndex = 10;

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        modal.style.zIndex = 0;
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modal.style.zIndex = 0;
        }
    }

}
function Modal() {
    $('#visitRoomFloor').click(ModalInput);
}

function Gear() {
    var elem = document.getElementsByClassName(".gear");
    alert("X="+elem.getBoundingClientRect().bottom);
}
function  getTemp() {
    $.ajax({
        url: 'http://smart.nazaryev.ru/',
        type:"POST",
        success: function() {
            alert('Load was performed.');
        },
        error:function() {
            alert('Load wasn\'t performed.');
        }
    });
}

function Fulling () {
    $(document).ready(function () {
        var rand = Math.random();
        var cil = document.getElementById('tempCilDash');
        var bBox = $('#tempCilDash')[0].getBoundingClientRect();
        var height = bBox.height;
        d3.select('#tempCilDash').attr("d","M65.2,189.5c0-0.2,0-0.3,0-0.5V"+eval(rand*150)+"c0-6.6-5.4-12-12-12h-2.2c-6.6,0-12,5.4-12,12V189 c0,0.3,0,0.7,0.1,1c-12.6,5.3-21.5,17.9-21.5,32.5c0,19.5,15.8,35.2,35.2,35.2c19.5,0,35.2-15.8,35.2-35.2 C88.1,207.4,78.6,194.5,65.2,189.5z")
        d3.select('#plast').attr("d","M77.1,"+eval(rand*118)+"h20.1c3.2,0,5.8-2.6,5.8-5.8v-9.7c0-3.2-2.6-5.8-5.8-5.8H77.1c-3.2,0-5.8,2.6-5.8,5.8c-1.7,1.6-3.3,3.2-5,4.8c1.7,1.6,3.3,3.2,5,4.8C71.3,"+eval(rand*114)+",73.9,"+eval(rand*118)+",77.1,"+eval(rand*118)+"z");
        d3.select('#squareDash').attr("height",rand*height);
    })
}