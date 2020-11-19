$(document).ready(function() {

    var Theme = localStorage.getItem("theme-color") || "dark";
    document.documentElement.setAttribute('storedTheme', Theme);
    trans();
    var flag = localStorage.getItem("flag-state") || "true";
    if (flag === "true") {
        $('#dark-theme-btn').css('display', 'block');
        $('#light-theme-btn').css('display', 'none');
    } else {
        $('#light-theme-btn').css('display', 'block');
        $('#dark-theme-btn').css('display', 'none');
    }

    switch (Theme) {
        case "dark":
            $("#dark-theme-2-c2").css("stroke", "var(--white)");
            $("#dark-theme-1-c2").css("stroke", "var(--color4)");
            $("#dark-theme-3-c2").css("stroke", "var(--color4)");
            break;
        case "light":
            $("#light-theme-2-c2").css("stroke", "var(--white)");
            $("#light-theme-1-c2").css("stroke", "var(--color4)");
            $("#light-theme-3-c2").css("stroke", "var(--color4)");
            break;
        case "dark-1":
            $("#dark-theme-2-c2").css("stroke", "var(--color4)");
            $("#dark-theme-1-c2").css("stroke", "var(--white)");
            $("#dark-theme-3-c2").css("stroke", "var(--color4)");
            break;
        case "dark-3":
            $("#dark-theme-2-c2").css("stroke", "var(--color4)");
            $("#dark-theme-1-c2").css("stroke", "var(--color4)");
            $("#dark-theme-3-c2").css("stroke", "var(--white)");
            break;
        case "light-1":
            $("#light-theme-2-c2").css("stroke", "var(--color4)");
            $("#light-theme-1-c2").css("stroke", "var(--white)");
            $("#light-theme-3-c2").css("stroke", "var(--color4)");
            break;
        case "light-3":
            $("#light-theme-2-c2").css("stroke", "var(--color4)");
            $("#light-theme-1-c2").css("stroke", "var(--color4)");
            $("#light-theme-3-c2").css("stroke", "var(--white)");
            break;

        default:
            $("#dark-theme-2-c2").css("stroke", "var(--white)");
            $("#dark-theme-1-c2").css("stroke", "var(--color4)");
            $("#dark-theme-3-c2").css("stroke", "var(--color4)");
    }

});



let iconSkipForward = document.querySelector('#bodymovinanim');


let animationSkipForward = bodymovin.loadAnimation({
    container: iconSkipForward,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "json/mode.json"
});


$('#SettingsBtn').on('click', function() {
    var flag = localStorage.getItem("flag-state") || "true";
    if (flag === "true") {
        animationSkipForward.playSegments([0, 55], true);
    } else {
        animationSkipForward.playSegments([55, 120], true);
    }

});

$('#bodymovinanim').on('click', function() {
    if (localStorage.getItem("flag-state") === "false") {
        lottietrans();
        document.documentElement.setAttribute('storedTheme', 'dark');
        localStorage.setItem("flag-state", "true");
        localStorage.setItem("theme-color", "dark");
        animationSkipForward.playSegments([0, 55], true);
        $("#dark-theme-2-c2").css("stroke", "var(--white)");
        $("#dark-theme-1-c2").css("stroke", "var(--color4)");
        $("#dark-theme-3-c2").css("stroke", "var(--color4)");
        $('#dark-theme-btn').css('display', 'block');
        $('#light-theme-btn').css('display', 'none');
        // document.getElementById("test").innerHTML = "onclick_true_flag dark " + localStorage.getItem("flag-state");

    } else {
        lottietrans();
        document.documentElement.setAttribute('storedTheme', 'light');
        localStorage.setItem("flag-state", "false");
        localStorage.setItem("theme-color", "light");
        animationSkipForward.playSegments([55, 120], true);
        $("#light-theme-2-c2").css("stroke", "var(--white)");
        $("#light-theme-1-c2").css("stroke", "var(--color4)");
        $("#light-theme-3-c2").css("stroke", "var(--color4)");
        $('#light-theme-btn').css('display', 'block');
        $('#dark-theme-btn').css('display', 'none');
        // document.getElementById("test").innerHTML = "onclick_false_flag light " + localStorage.getItem("flag-state");

    }
});

function lottietrans() {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 0);
}

function trans() {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 1000);
}

//......................................................................................................../////////////////
$("#dark-theme-1").on('click', function() {
    localStorage.setItem("theme-color", "dark-1");
    document.documentElement.setAttribute('storedTheme', 'dark-1');
    trans();
    $("#dark-theme-2-c2").css("stroke", "var(--color4)");
    $("#dark-theme-1-c2").css("stroke", "var(--white)");
    $("#dark-theme-3-c2").css("stroke", "var(--color4)");
});
$("#dark-theme-2").on('click', function() {
    localStorage.setItem("theme-color", "dark");
    document.documentElement.setAttribute('storedTheme', 'dark');
    trans();
    $("#dark-theme-2-c2").css("stroke", "var(--white)");
    $("#dark-theme-1-c2").css("stroke", "var(--color4)");
    $("#dark-theme-3-c2").css("stroke", "var(--color4)");

});
$("#dark-theme-3").on('click', function() {
    localStorage.setItem("theme-color", "dark-3");
    document.documentElement.setAttribute('storedTheme', 'dark-3');
    trans();
    $("#dark-theme-2-c2").css("stroke", "var(--color4)");
    $("#dark-theme-1-c2").css("stroke", "var(--color4)");
    $("#dark-theme-3-c2").css("stroke", "var(--white)");
});


$("#light-theme-1").on('click', function() {
    localStorage.setItem("theme-color", "light-1");
    document.documentElement.setAttribute('storedTheme', 'light-1');
    trans();
    $("#light-theme-2-c2").css("stroke", "var(--color4)");
    $("#light-theme-1-c2").css("stroke", "var(--white)");
    $("#light-theme-3-c2").css("stroke", "var(--color4)");
});
$("#light-theme-2").on('click', function() {
    localStorage.setItem("theme-color", "light");
    document.documentElement.setAttribute('storedTheme', 'light');
    trans();
    $("#light-theme-2-c2").css("stroke", "var(--white)");
    $("#light-theme-1-c2").css("stroke", "var(--color4)");
    $("#light-theme-3-c2").css("stroke", "var(--color4)");
});
$("#light-theme-3").on('click', function() {
    localStorage.setItem("theme-color", "light-3");
    document.documentElement.setAttribute('storedTheme', 'light-3');
    trans();
    $("#light-theme-2-c2").css("stroke", "var(--color4)");
    $("#light-theme-1-c2").css("stroke", "var(--color4)");
    $("#light-theme-3-c2").css("stroke", "var(--white)");
});

$("#dark-theme-1").hover(function() {
    $("#theme-1-c1").css("stroke", "var(--white)");
}, function() {
    $("#theme-1-c1").css("stroke", "var(--color4)");
});
$("#dark-theme-2").hover(function() {
    $("#theme-2-c1").css("stroke", "var(--white)");
}, function() {
    $("#theme-2-c1").css("stroke", "var(--color4)");
});
$("#dark-theme-3").hover(function() {
    $("#theme-3-c1").css("stroke", "var(--white)");
}, function() {
    $("#theme-3-c1").css("stroke", "var(--color4)");
});


$("#light-theme-1").hover(function() {
    $("#light-theme-1-c1").css("stroke", "var(--white)");
}, function() {
    $("#light-theme-1-c1").css("stroke", "var(--color4)");
});
$("#light-theme-2").hover(function() {
    $("#light-theme-2-c1").css("stroke", "var(--white)");
}, function() {
    $("#light-theme-2-c1").css("stroke", "var(--color4)");
});
$("#light-theme-3").hover(function() {
    $("#light-theme-3-c1").css("stroke", "var(--white)");
}, function() {
    $("#light-theme-3-c1").css("stroke", "var(--color4)");
});



//controls...starts
var bgm = document.getElementById("bgm");
// $(document).ready(function() {
//     setTimeout(function() {
//         bgm.play();
//         const player = document.querySelector("lottie-player");
//         player.play();

//     }, 1000);
// });
jQuery(document).ready(function($) {
    $('#vedhase-toggle').on('click', function() {
        if ($(this).attr('data-click-state') == 1) {
            $(this).attr('data-click-state', 0);
            $('#play_svg').css('display', 'none');
            $('#pause_svg').css('display', 'block');
            const player = document.querySelector("lottie-player");
            player.play();
            bgm.play();
        } else {
            $(this).attr('data-click-state', 1);
            $('#play_svg').css('display', 'block');
            $('#pause_svg').css('display', 'none');
            const player = document.querySelector("lottie-player");
            player.pause();
            bgm.pause();

        }
    });
});

function play() {
    $('#play_svg').css('display', 'none');
    $('#pause_svg').css('display', 'block');
    const player = document.querySelector("lottie-player");
    player.play();
    bgm.play();

}

function pause() {
    $('#play_svg').css('display', 'block');
    $('#pause_svg').css('display', 'none');
    const player = document.querySelector("lottie-player");
    player.pause();
    bgm.pause();

}

function replay() {
    const player = document.querySelector("lottie-player");
    player.stop();
    player.play();
    bgm.pause();
    bgm.currentTime = 0;
    bgm.play();

    $('#replay_svg').css('display', 'none');
    $('#replay_ro_svg').css('display', 'block');
    $('#play_svg').css('display', 'none');
    $('#pause_svg').css('display', 'block');
}

function replay_ro() {
    const player = document.querySelector("lottie-player");
    player.stop();
    player.play();
    bgm.pause();
    bgm.currentTime = 0;
    bgm.play();
    $('#replay_svg').css('display', 'block');
    $('#replay_ro_svg').css('display', 'none');
    $('#play_svg').css('display', 'none');
    $('#pause_svg').css('display', 'block');
}

function mute() {
    $('#mute_svg').css('display', 'none');
    $('#sound_svg').css('display', 'block');
    bgm.muted = false;
}

function sound() {
    $('#mute_svg').css('display', 'block');
    $('#sound_svg').css('display', 'none');
    bgm.muted = true;
}

//controls..........................ends........................


$(window).on("load", function() {
    $.ready.then(function() {
        $("#loader").css('display', 'none');
    });
});


//nav tab
$(document).ready(function() {

    $('.list-group a').on('shown.bs.tab', function(event) {
        var x = $(event.target).attr("id"); // active tab
        var y = $(event.relatedTarget).attr("id"); // previous tab

        const player = document.querySelector("lottie-player");
        switch (x) {
            case "iamBtn":

                $("#page_title").text("Aravinth");
                $('.light0').css('display', 'block');
                $('#pause_svg').css('display', 'none');
                $('#play_svg').css('display', 'block');
                break;
            case "OverviewBtn":
                player.stop();
                bgm.pause();
                bgm.currentTime = 0;
                $("#page_title").text("Overview");
                $('.light1').css('display', 'block');
                break;
            case "LottieFilesBtn":
                player.stop();
                bgm.pause();
                bgm.currentTime = 0;
                $("#page_title").text("LottieFiles");
                $('.light2').css('display', 'block');
                break;
            case "_3dBtn":
                player.stop();
                bgm.pause();
                bgm.currentTime = 0;
                $("#page_title").text("3d Model");
                $('.light3').css('display', 'block');
                break;
            case "FindBtn":
                player.stop();
                bgm.pause();
                bgm.currentTime = 0;
                $("#page_title").text("Find me");
                $('.light4').css('display', 'block');
                break;
            case "SettingsBtn":
                player.stop();
                bgm.pause();
                bgm.currentTime = 0;
                $("#page_title").text("Settings");
                $('.light5').css('display', 'block');
                break;
            default:
                $("#page_title").text("Aravinth");
                $('.light0').css('display', 'block');
        }
        switch (y) {
            case "iamBtn":

                $('.light0').css('display', 'none');

                break;
            case "OverviewBtn":

                $('.light1').css('display', 'none');
                break;
            case "LottieFilesBtn":

                $('.light2').css('display', 'none');
                break;
            case "_3dBtn":
                $('.light3').css('display', 'none');
                break;
            case "FindBtn":
                $('.light4').css('display', 'none');
                break;
            case "SettingsBtn":
                $('.light5').css('display', 'none');
                break;
            default:
                $('.light0').css('display', 'none');

        }

    });

    var activeTab = $(event.target).attr('href');
    if (activeTab) {
        $('#myTab a[href="' + activeTab + '"]').tab('show');
    }

});
//default state
$(document).ready(function() {
    $("#page_title").text("Aravinth");
    $('.light0').css('display', 'block');

    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        mousewheel: true,
        observer: true,
        observeParents: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

$(document).ready(function() {
    $('#pause_svg').css('display', 'none');
    $('#play_svg').css('display', 'block');

    $('#mute_svg').css('display', 'none');
    $('#replay_ro_svg').css('display', 'none');
    $('#sound_svg').css('display', 'block');
    $('#replay_svg').css('display', 'block');

});