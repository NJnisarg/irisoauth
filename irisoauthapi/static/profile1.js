$(document).ready(function(){
    if(localStorage.getItem('data')==null)
    {
        window.location.replace('https://localhost:8000/')
    }
    else
    {
        var data = JSON.parse(localStorage.getItem('data').replace(/'/g, '"'));
        var element = $("<div class=\"profile\">\n" +
            "      <div class=\"half left\">\n" +
            "        <img src=\"https://scontent.fceb2-2.fna.fbcdn.net/v/t1.0-9/36712171_1528781580565108_3495963925650866176_n.jpg?_nc_cat=0&_nc_eui2=AeEsbiRbcQf01inFWlNm4yBbI_lwe3LknegeV4WfUqUwQiSgEoKWYjJaA7HdbhX0aGINQ8b6EsU9gpCyuU6pF5T7eZtC9I4FpUiPrdPAk1DUdw&oh=f11a99c07bfd2baccec7a7f051595b66&oe=5C0B6628\" alt=\"Profile picture\" />\n" +
            "        <span class=\"name\">" + data.first_name + " " + data.last_name + "</span>\n" +
            "      </div>\n" +
            "      <div class=\"half right\">\n" +
            "        <div class=\"info\">\n" +
            "          <span class=\"title\">Name</span>\n" +
            "          <i class=\"desc\">" + data.first_name + " " + data.last_name + "</i>\n" +
            "          <span class=\"title\">Email</span>\n" +
            "          <i class=\"desc\">" + data.email + "</i>\n" +
            "          <span class=\"title\">Reg No.</span>\n" +
            "          <i class=\"desc\">" + data.reg_no + "</i>\n" +
            "          <span class=\"title\">Roll No.</span>\n" +
            "          <i class=\"desc\">" + data.roll_no + "</i>\n" +
            "        </div>\n" +
            "      </div>\n" +
            "    </div>");
        var logout = $("<a href=\"#id\" class=\"flipper-container\" onclick='logout()'>\n" +
            "          <div id=\"id\" class=\"flipper\" style=\"margin-left:-60px;\">\n" +
            "                <div class=\"front-face\" data-icon=\"&#x27a3;\"><span data-hover=\"Clicked\">Logout</span></div>\n" +
            "                <div class=\"back-face\" data-icon=\"&#10003;\">Logging out</div>\n" +
            "          </div>\n" +
            "    </a>");
        $("body").append(element);
        $("body").append(logout);
    }
});

function logout()
{
    localStorage.removeItem('data');
    window.location.replace('https://localhost:8000/')
}