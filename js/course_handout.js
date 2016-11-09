$(document).ready(function() {
    
    //For toggling the the drop down and pull up images for subtopics and for displaying or hiding the subtopics
    $('.drop_down_button').click(function() {

        var img = $(this).attr("src");
        if(img=="images/drop_down.png")
            img = "images/pull_up_arrow.svg";
        else
            img = "images/drop_down.png";
        $(this).attr("src", img);

        $(this).parent().next().slideToggle(200);
    });


});


//For calling topicStatus_Update when the topic checkbox is clicked
function callUpdateTopicStatus(topic, courseCode, e) {

    window.alert('yo!');
    
    if (e.checked == true)
        var value = 'checked';
    else
        var value = 'notChecked';

    topic = encodeURI(topic); //encoding the topic to include spaces and special characters when sending through ajax

    //window.alert(courseCode);
    //window.alert(value);        
    //window.alert(topic);

    $.ajax({
        url: "../faculty_editDatabase.php",
        type: "POST",
        data: {method:'topicStatus_Update', topic:topic, value:value, courseCode:courseCode},
        success: function(output) {
           //window.alert(output);
        }
    });
}



//For calling subtopicStatus_Update when the subtopic checkbox is clicked
function callUpdateSubtopicStatus(topic, subtopic, courseCode, e) {
    if (e.checked == true)
        var value = 'checked';
    else
        var value = 'notChecked';

    topic = encodeURI(topic); //encoding the topic to include spaces and special characters when sending through ajax
    subtopic = encodeURI(subtopic); //encoding the topic to include spaces and special characters when sending through ajax

    $.ajax({
        url: "../faculty_editDatabase.php",
        type: "POST",
        data: {method:'subtopicStatus_Update', topic:topic, subtopic:subtopic, value:value, courseCode:courseCode},
        success: function(output) { 

            topic = decodeURI(topic); //This will againj get encoded when sent to callUpdateSubtopicStatus
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.checked = output;
            
            $(e).closest('.topic_and_subtopic').find('.topic_input').prop("checked", output);
            callUpdateTopicStatus(topic, courseCode, checkbox);
            
        }
    });
    
}
