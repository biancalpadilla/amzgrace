var allParts = ['usb1', 'usb2', 'ethernet', 'usbethernetcontroller',
  'videoaudio', 'cameracsi', 'cpugpu', 'hdmi', 'microusb', 'displaydsi'
];

var origXPos = [];
var origYPos = [];
var attempts = 0;
var correct = 0;

var captions = [];
captions[0] =
  "USB is short for Universal Serial Bus. A single USB port can be used to connect your Raspberry Pi to other devices, such as mice, modems, and keyboards.";
captions[1] =
  "USB is short for Universal Serial Bus. A single USB port can be used to connect your Raspberry Pi to other devices, such as mice, modems, and keyboards.";
captions[2] =
  "An Ethernet port allows your to connect your Raspberry Pi to the Internet using a WiFi router.";
captions[3] =
  "The USB and Ethernet controller controls all inputs and outputs related to USB and Internet interaction.";
captions[4] =
  "Video and Audio Controller controls all inputs and outputs related to video and audio interaction.";
captions[5] =
  "Camera Serial Interface, or CSI for short, is a ribbon connector that allows your Raspberry Pi to <use></use> a camera.";
captions[6] =
  "CPU means Central Processing Unit. The CPU is the brains of the computer where most calculations take place. A GPU means Graphics Processing Unit, and is used to create and show images on your screen.";
captions[7] =
  "HDMI allows you to connect your Raspberry Pi to a TV.";
captions[8] = "The Micro USB gives your Raspberry Pi power.";
captions[9] =
  "Display Serial Interface, or DSI for short, is a ribbon connector that allows your Raspberry Pi to use a display, like a computer monitor.";

function dragndropInit() {
  $("#detail")
    .hide();
  $("#shareCon")
    .hide();
  $(".draggable")
    .draggable({
      revert: "valid"
    });
  $(".droppable")
    .droppable({
      hoverClass: "boxHover",
      drop: function (event, ui) {
        $(this)
        var dragid = ui.draggable.attr("id").substring(1, ui.draggable.attr(
          "id").length);
        var dropid = $(this).attr("id").substring(1, $(this).attr("id").length);
        var dataid = $(this).attr("data-id")
        if(dragid == dropid) {
          ui.draggable.css("visibility", "hidden");

          // Counts number of times
          attempts++;
          correct++;
          $("#numAttempts").text(attempts);
          $("#numCorrect").text(correct);
          showInfo(dataid);

          $(this).click(function () {
            showInfo(dataid);
          });

          if(correct == 10) {
            $("#share").text("It took you " + attempts +
              " attempts to match them all!");
            $("#shareCon").show();
          }

        } else {
          attempts++;
          $("#numAttempts").text(attempts);
        }
      }
    });

  $(".droppable2").droppable();

  $("#detail").click(function () {
    $("#detail").hide();
    $("#detail").animate({
      opacity: '0'
    }, 500);
  });
}

function showInfo(which) {
  $("#detail").show();
  $("#detail").animate({
    opacity: '1'
  }, 500);
  $("#detail #desc").text(captions[which]);

  var img = new Image();
  img.src = "images/real-" + allParts[which] + ".jpg";
  $("#detail #photoCon").empty();
  $("#detail #photoCon").append(img);
}


$(document)
  .ready(function () {
    dragndropInit();
  });
