<?php
  //Setting header to JSON
  header('content-Type: application/json');

  //Database
  define('DB_HOST', 'mysql.cs.bangor.ac.uk');
  define('DB_USERNAME', 'eeu6fc');
  define('DB_PASSWORD', 'eeu6fc');
  define('DB_NAME', 'eeu6fc');

  //Connect to Database
  $mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

  if(!$mysqli){
    die("Connection Failed: " .$mysqli -> error);
  }

  //Query, to get data from the table called hurn
  $query = sprintf("SELECT yyyy, mm, tMax_degC, tMin_degC, af_days, rain_mm, sun_hours
    FROM hurn WHERE yyyy = '2005' ORDER BY yyyy ");

  //Execute Query
  $result = $mysqli -> query($query);

  //Loop through the returned DATABASE
  $data = array();
  foreach ($result as $row) {
    $data[] = $row;
  }

  //Free memory associated with result
  $result->close();

  //Close connection
  $mysqli->close();

  //Print the data
  print json_encode($data);
 ?>
