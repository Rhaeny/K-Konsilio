<?php 

// funkce pro diakritiku v mailu
function autoUTF($s)
{
    if (preg_match('#[\x80-\x{1FF}\x{2000}-\x{3FFF}]#u', $s)) // detect UTF-8
    {
        return $s;
    }
    elseif (preg_match('#[\x7F-\x9F\xBC]#', $s)) // detect WINDOWS-1250
    {
        return iconv('WINDOWS-1250', 'UTF-8', $s);
    }
    else // assume ISO-8859-2
    {
        return iconv('ISO-8859-2', 'UTF-8', $s);
    }
}

// odeslani mailu s diakritikou
function cs_mail($to, $predmet, $zprava, $head = "")
{
    $predmet = "=?utf-8?B?".base64_encode(autoUTF($predmet))."?=";
    $head .= "MIME-Version: 1.0".PHP_EOL;
    $head .= "Content-Type: text/html; charset=\"utf-8\"".PHP_EOL;
    $head .= "Content-Transfer-Encoding: base64".PHP_EOL;
    $zprava = wordwrap(base64_encode(autoUTF($zprava)), 78, PHP_EOL, true);
    return mail($to, $predmet, $zprava, $head);
}

// Data from form
$jmeno = $_POST['name'];
$prijmeni = $_POST['surname'];
$email = $_POST['email'];
$kategorie = $_POST['need'];
$obsah = $_POST['message'];
 

$to = "k-konsilio@seznam.cz";
$subject = "$jmeno $prijmeni - $kategorie";
$txt="$obsah";

cs_mail($to, $subject, $txt, "From: $email".PHP_EOL);

?>