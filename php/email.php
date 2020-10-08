<?php

    if(isset($_POST['email']) && !empty($_POST['email'])
    {
        $nome = addslashes($_POST['nome']);
        $email = addslashes($_POST['email']);
        $mensagem = addslashes($_POST['message']);

        $to = "gabrielrikson@outlook.com";
        $subject = "Contato de Serviço Vidraçaria";
        $body = "Nome: ".$nome. "\r\n".
                "Email: ".$email. "\r\n".
                "Mensagem: ".$mensagem;
        $header = "From: gabrielrikson@outlook.com"."\r\n"
                    ."Reply-To:".$email."\r\n"
                    ."X=Mailer:PHP/".phpversion();

        if(mail($to,$subject,$body,$header))
        {
            echo "Email enviado com sucesso !";
        }
        else
        {
            echo "O Email nao pode ser enviado!";
        }
    }   
?>