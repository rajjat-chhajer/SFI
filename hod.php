<?php 

    session_start();
    //$_SESSION['userClass'] = 'student'; //To check if authorization is working or not.

    require '../database_connection.php';
    require 'hod_auth.php'; //This will be faculty_auth when the faculty home page is made
    include('../classes_and_functions.php');
    
    $userID = $_SESSION['userID'];
    $session = $_SESSION['session'];
    
    $hod_ob = new hod();
    $courses = $hod_ob->courseIncharge($userID, $session, $db);
    
    $result = array();
    foreach($courses as $row) {
        $result[] = $row;
    }
    $_SESSION['courseIncharge'] = $result;

    $name = $hod_ob->getUsername($userID, $db);
    $researchArea = $hod_ob->getResearch($userID, $db);
    $emailID = $hod_ob->getEmail($userID, $db);

    mysqli_close($db);
?>

<!DOCTYPE HTML>
<html>
    <head>
        <title> Moodle </title>
        <link rel="stylesheet" href="../rajjat/moodlestyle.css">
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <link rel="stylesheet" href="../rajjat/hod_css.css">
        <link rel="stylesheet" href="../rajjat/modal.css">
        <title>Student Faculty Interaction | Home</title>
    </head>
    
    <body>
        <div id= 'outer-border'>
            <div class= background-top>
                    <div class= background-main>
                        <div id=login-info> You are logged in as <a id=link href=#><span><?php echo $name; ?></span> </a> | <a id=link href='moodle.php'> Return back to moodle </a>| </div>
                        <img src="../rajjat/assets/logo.png" id=logo>
                    </div>

                    <div id='grad1' />
                        <div id=menu> 
                            <a href=# id=menu-item style="padding:5px;" > Home </a> | <a href=# id=menu-item style="padding:5px;"  > Back</a> | <a href=# id=myBtn style="position:relative; top:5px; left:5px; color:black; font-size: 18px; text-decoration: none; padding:5px;"  >Request meeting</a>
                            <div id="myModal" class="modal">

                <!-- Modal content -->
                <div class="modal-content">
                    <div class="modal-header">
                    <span class="close"> &#9747; </span>
                    <h2>Message</h2>
                    </div>
                    <div class="modal-body">
                        <form id="meeting">
                            <br>
                            <lable><b>TO:</b></lable> <input type="text" name="receiver" placeholder="Username" id=shorttxt style="width:60%" required="required"><br>
                            <br>
                            <lable><b>Subject:</b></lable> <input type="text" name="Subject" PLACEHOLDER="Subject of your message" id= shorttxt style="width:60%" required="required"><br>
                            <br>
                            <lable><b >Message:</b></label> <textarea rows=6 cols=80 name="message" placeholder="Your message" wrap=soft id=bigtxt required="required"></textarea><br>
                            <br>
                            <input type="submit" value="Send Request" id=sendmessage >    
                        </form>
                    </div>
                </div>

            </div>

            <script type="text/javascript" src="../js/home_page.js"></script>
            <img src="../rajjat/assets/notification.png" style="position:relative; width:30px;height:30px; float:right;">
                            
                        
        </div>
                        
                        
    <div id=background-white>   
        <div class=right>
            <nav class=txt><i>Profile</i></nav>
            
                <div id=small-right>   
                    <img src ="../rajjat/assets/pgupta.png" id=user-face>  
                    <div class= txt ><?php echo $name ?></div>
                    <i>specialisation & research field </i>
                    <?php echo "<ul type=disc><li>$researchArea</ul>"; ?>
                    Email Id - <?php echo $emailID ?>
                </div>
        </div>

    <nav>
        <ul>
            <?php foreach($courses as $row) { ?>
                <div class="dropdown">
                <button class="dropbtn"><?php echo $row['courseName']; ?></button>
                <div class="dropdown-content">
                    <a href="#">faculty incharge</a>
                    <a href="hod_course_handout.php?course=<?php echo $row['courseCode']; ?>">view course handout</a>
                    <a href="#">view feedback</a>
                    <a href="#">research and specialisation</a>
                </div>
                </div>
            <?php } ?>

        </ul>
    </nav>


                            </div>
                </div>
        </div>
    </div>
        
    </body>
</html>
