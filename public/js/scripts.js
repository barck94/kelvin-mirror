let link = document.querySelector(".btn-hero")
let link2 = document.querySelector(".btn-how")
let popup = document.querySelector(".modal-content")
let close = document.querySelector(".modal-content-close")
let overlay = document.querySelector(".modal-overlay")
let buy1 = document.querySelector(".buy1")
let buy2 = document.querySelector(".buy2")
let buy3 = document.querySelector(".buy3")
let buy4 = document.querySelector(".buy4")
let buy5 = document.querySelector(".buy5")
let gigantRadio = document.querySelector(".gigant")
let kvadrat = document.querySelector(".kvadrat")
let pryamougolnikRadio = document.querySelector(".pryamougolnik")
let stolRadio = document.querySelector(".stol")
let stoykiRadio = document.querySelector(".stoyki")
let price = document.querySelector(".price")
let gigantLabel = document.querySelector(".gigant-label")
let kvadratLabel = document.querySelector(".kvadrat-label")
let pryamougolnikLabel = document.querySelector(".pryamougolnik-label")
let stolLabel = document.querySelector(".stol-label")
let stoykiLabel = document.querySelector(".stoyki-label")
let body = document.querySelector("#scroll")

function validate_form ( )
{
    valid = true;

    if ( document.order.name.value == "" )
    {
        popup.classList.add("shaking-block");
        valid = false;
    }
    if ( document.order.number.value == "" )
    {
        popup.classList.add("shaking-block");
        valid = false;
    }
    if ( document.order.email.value == "" )
    {
        popup.classList.add("shaking-block");
        valid = false;
    }

    if ( ( document.order.model[0].checked == false ) && ( document.order.model[1].checked == false ) &&
        ( document.order.model[2].checked == false ) && ( document.order.model[3].checked == false ) &&
        ( document.order.model[4].checked == false ))
    {
        popup.classList.add("shaking-block");
        valid = false;
    }

    return valid;
}


link.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");
    body.classList.add("no-scroll");

    gigantRadio.addEventListener("click", function(event){
        price.innerHTML = "16890₽";
    });
    kvadratLabel.addEventListener("click", function(event){
        price.innerHTML = "8990₽";
    });
    pryamougolnikLabel.addEventListener("click", function(event){
        price.innerHTML = "9800₽";
    });
    stolLabel.addEventListener("click", function(event){
        price.innerHTML = "13890₽";
    });
    stoykiLabel.addEventListener("click", function(event){
        price.innerHTML = "3890₽";
    });

});


buy1.addEventListener("click", function(event){
    event.preventDefault();
    body.classList.add("no-scroll");
    price.innerHTML = "16890₽";
    popup.classList.add("modal-content-show");
    gigantRadio.checked = "false";
    overlay.classList.add("modal-overlay-show");
    gigantRadio.addEventListener("click", function(event){
        price.innerHTML = "16890₽";
    });
    kvadratLabel.addEventListener("click", function(event){
        price.innerHTML = "8990₽";
    });
    pryamougolnikLabel.addEventListener("click", function(event){
        price.innerHTML = "9800₽";
    });
    stolLabel.addEventListener("click", function(event){
        price.innerHTML = "13890₽";
    });
    stoykiLabel.addEventListener("click", function(event){
        price.innerHTML = "3890₽";
    });
});

buy2.addEventListener("click", function(event){
    event.preventDefault();
    body.classList.add("no-scroll");
    price.innerHTML = "8990₽";
    popup.classList.add("modal-content-show");
    kvadrat.checked = "false";
    overlay.classList.add("modal-overlay-show");
    gigantRadio.addEventListener("click", function(event){
        price.innerHTML = "16890₽";
    });
    kvadratLabel.addEventListener("click", function(event){
        price.innerHTML = "8990₽";
    });
    pryamougolnikLabel.addEventListener("click", function(event){
        price.innerHTML = "9800₽";
    });
    stolLabel.addEventListener("click", function(event){
        price.innerHTML = "13890₽";
    });
    stoykiLabel.addEventListener("click", function(event){
        price.innerHTML = "3890₽";
    });
});


buy3.addEventListener("click", function(event){
    event.preventDefault();
    body.classList.add("no-scroll");
    price.innerHTML = "9800₽";
    popup.classList.add("modal-content-show");
    pryamougolnikRadio.checked = "false";
    overlay.classList.add("modal-overlay-show");
    gigantRadio.addEventListener("click", function(event){
        price.innerHTML = "16890₽";
    });
    kvadratLabel.addEventListener("click", function(event){
        price.innerHTML = "8990₽";
    });
    pryamougolnikLabel.addEventListener("click", function(event){
        price.innerHTML = "9800₽";
    });
    stolLabel.addEventListener("click", function(event){
        price.innerHTML = "13890₽";
    });
    stoykiLabel.addEventListener("click", function(event){
        price.innerHTML = "3890₽";
    });
});


buy4.addEventListener("click", function(event){
    event.preventDefault();
    body.classList.add("no-scroll");
    price.innerHTML = "13890₽";
    popup.classList.add("modal-content-show");
    stolRadio.checked = "false";
    overlay.classList.add("modal-overlay-show");
    gigantRadio.addEventListener("click", function(event){
        price.innerHTML = "16890₽";
    });
    kvadratLabel.addEventListener("click", function(event){
        price.innerHTML = "8990₽";
    });
    pryamougolnikLabel.addEventListener("click", function(event){
        price.innerHTML = "9800₽";
    });
    stolLabel.addEventListener("click", function(event){
        price.innerHTML = "13890₽";
    });
    stoykiLabel.addEventListener("click", function(event){
        price.innerHTML = "3890₽";
    });
});

buy5.addEventListener("click", function(event){
    event.preventDefault();
    body.classList.add("no-scroll");
    price.innerHTML = "3890₽";
    popup.classList.add("modal-content-show");
    stoykiRadio.checked = "false";
    overlay.classList.add("modal-overlay-show");
    gigantRadio.addEventListener("click", function(event){
        price.innerHTML = "16890₽";
    });
    kvadratLabel.addEventListener("click", function(event){
        price.innerHTML = "8990₽";
    });
    pryamougolnikLabel.addEventListener("click", function(event){
        price.innerHTML = "9800₽";
    });
    stolLabel.addEventListener("click", function(event){
        price.innerHTML = "13890₽";
    });
    stoykiLabel.addEventListener("click", function(event){
        price.innerHTML = "3890₽";
    });
});


link2.addEventListener("click", function(event){
    event.preventDefault();
    body.classList.add("no-scroll");
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");
});

overlay.addEventListener("click", function(event){
    event.preventDefault();
    body.classList.remove("no-scroll");
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-overlay-show");
});

close.addEventListener("click", function(event){
    event.preventDefault();
    body.classList.remove("no-scroll");
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-overlay-show");
});


!function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery" ], factory) : factory("object" == typeof exports ? require("jquery") : jQuery);
}(function($) {
    var caretTimeoutId, ua = navigator.userAgent, iPhone = /iphone/i.test(ua), chrome = /chrome/i.test(ua), android = /android/i.test(ua);
    $.mask = {
        definitions: {
            "9": "[0-9]",
            a: "[A-Za-z]",
            "*": "[A-Za-z0-9]"
        },
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, $.fn.extend({
        caret: function(begin, end) {
            var range;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof begin ? (end = "number" == typeof end ? end : begin,
                this.each(function() {
                    this.setSelectionRange ? this.setSelectionRange(begin, end) : this.createTextRange && (range = this.createTextRange(),
                        range.collapse(!0), range.moveEnd("character", end), range.moveStart("character", begin),
                        range.select());
                })) : (this[0].setSelectionRange ? (begin = this[0].selectionStart, end = this[0].selectionEnd) : document.selection && document.selection.createRange && (range = document.selection.createRange(),
                begin = 0 - range.duplicate().moveStart("character", -1e5), end = begin + range.text.length),
                {
                    begin: begin,
                    end: end
                });
        },
        unmask: function() {
            return this.trigger("unmask");
        },
        mask: function(mask, settings) {
            var input, defs, tests, partialPosition, firstNonMaskPos, lastRequiredNonMaskPos, len, oldVal;
            if (!mask && this.length > 0) {
                input = $(this[0]);
                var fn = input.data($.mask.dataName);
                return fn ? fn() : void 0;
            }
            return settings = $.extend({
                autoclear: $.mask.autoclear,
                placeholder: $.mask.placeholder,
                completed: null
            }, settings), defs = $.mask.definitions, tests = [], partialPosition = len = mask.length,
                firstNonMaskPos = null, $.each(mask.split(""), function(i, c) {
                "?" == c ? (len--, partialPosition = i) : defs[c] ? (tests.push(new RegExp(defs[c])),
                null === firstNonMaskPos && (firstNonMaskPos = tests.length - 1), partialPosition > i && (lastRequiredNonMaskPos = tests.length - 1)) : tests.push(null);
            }), this.trigger("unmask").each(function() {
                function tryFireCompleted() {
                    if (settings.completed) {
                        for (var i = firstNonMaskPos; lastRequiredNonMaskPos >= i; i++) if (tests[i] && buffer[i] === getPlaceholder(i)) return;
                        settings.completed.call(input);
                    }
                }
                function getPlaceholder(i) {
                    return settings.placeholder.charAt(i < settings.placeholder.length ? i : 0);
                }
                function seekNext(pos) {
                    for (;++pos < len && !tests[pos]; ) ;
                    return pos;
                }
                function seekPrev(pos) {
                    for (;--pos >= 0 && !tests[pos]; ) ;
                    return pos;
                }
                function shiftL(begin, end) {
                    var i, j;
                    if (!(0 > begin)) {
                        for (i = begin, j = seekNext(end); len > i; i++) if (tests[i]) {
                            if (!(len > j && tests[i].test(buffer[j]))) break;
                            buffer[i] = buffer[j], buffer[j] = getPlaceholder(j), j = seekNext(j);
                        }
                        writeBuffer(), input.caret(Math.max(firstNonMaskPos, begin));
                    }
                }
                function shiftR(pos) {
                    var i, c, j, t;
                    for (i = pos, c = getPlaceholder(pos); len > i; i++) if (tests[i]) {
                        if (j = seekNext(i), t = buffer[i], buffer[i] = c, !(len > j && tests[j].test(t))) break;
                        c = t;
                    }
                }
                function androidInputEvent() {
                    var curVal = input.val(), pos = input.caret();
                    if (oldVal && oldVal.length && oldVal.length > curVal.length) {
                        for (checkVal(!0); pos.begin > 0 && !tests[pos.begin - 1]; ) pos.begin--;
                        if (0 === pos.begin) for (;pos.begin < firstNonMaskPos && !tests[pos.begin]; ) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    } else {
                        for (checkVal(!0); pos.begin < len && !tests[pos.begin]; ) pos.begin++;
                        input.caret(pos.begin, pos.begin);
                    }
                    tryFireCompleted();
                }
                function blurEvent() {
                    checkVal(), input.val() != focusText && input.change();
                }
                function keydownEvent(e) {
                    if (!input.prop("readonly")) {
                        var pos, begin, end, k = e.which || e.keyCode;
                        oldVal = input.val(), 8 === k || 46 === k || iPhone && 127 === k ? (pos = input.caret(),
                            begin = pos.begin, end = pos.end, end - begin === 0 && (begin = 46 !== k ? seekPrev(begin) : end = seekNext(begin - 1),
                            end = 46 === k ? seekNext(end) : end), clearBuffer(begin, end), shiftL(begin, end - 1),
                            e.preventDefault()) : 13 === k ? blurEvent.call(this, e) : 27 === k && (input.val(focusText),
                            input.caret(0, checkVal()), e.preventDefault());
                    }
                }
                function keypressEvent(e) {
                    if (!input.prop("readonly")) {
                        var p, c, next, k = e.which || e.keyCode, pos = input.caret();
                        if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > k) && k && 13 !== k) {
                            if (pos.end - pos.begin !== 0 && (clearBuffer(pos.begin, pos.end), shiftL(pos.begin, pos.end - 1)),
                                    p = seekNext(pos.begin - 1), len > p && (c = String.fromCharCode(k), tests[p].test(c))) {
                                if (shiftR(p), buffer[p] = c, writeBuffer(), next = seekNext(p), android) {
                                    var proxy = function() {
                                        $.proxy($.fn.caret, input, next)();
                                    };
                                    setTimeout(proxy, 0);
                                } else input.caret(next);
                                pos.begin <= lastRequiredNonMaskPos && tryFireCompleted();
                            }
                            e.preventDefault();
                        }
                    }
                }
                function clearBuffer(start, end) {
                    var i;
                    for (i = start; end > i && len > i; i++) tests[i] && (buffer[i] = getPlaceholder(i));
                }
                function writeBuffer() {
                    input.val(buffer.join(""));
                }
                function checkVal(allow) {
                    var i, c, pos, test = input.val(), lastMatch = -1;
                    for (i = 0, pos = 0; len > i; i++) if (tests[i]) {
                        for (buffer[i] = getPlaceholder(i); pos++ < test.length; ) if (c = test.charAt(pos - 1),
                                tests[i].test(c)) {
                            buffer[i] = c, lastMatch = i;
                            break;
                        }
                        if (pos > test.length) {
                            clearBuffer(i + 1, len);
                            break;
                        }
                    } else buffer[i] === test.charAt(pos) && pos++, partialPosition > i && (lastMatch = i);
                    return allow ? writeBuffer() : partialPosition > lastMatch + 1 ? settings.autoclear || buffer.join("") === defaultBuffer ? (input.val() && input.val(""),
                        clearBuffer(0, len)) : writeBuffer() : (writeBuffer(), input.val(input.val().substring(0, lastMatch + 1))),
                        partialPosition ? i : firstNonMaskPos;
                }
                var input = $(this), buffer = $.map(mask.split(""), function(c, i) {
                    return "?" != c ? defs[c] ? getPlaceholder(i) : c : void 0;
                }), defaultBuffer = buffer.join(""), focusText = input.val();
                input.data($.mask.dataName, function() {
                    return $.map(buffer, function(c, i) {
                        return tests[i] && c != getPlaceholder(i) ? c : null;
                    }).join("");
                }), input.one("unmask", function() {
                    input.off(".mask").removeData($.mask.dataName);
                }).on("focus.mask", function() {
                    if (!input.prop("readonly")) {
                        clearTimeout(caretTimeoutId);
                        var pos;
                        focusText = input.val(), pos = checkVal(), caretTimeoutId = setTimeout(function() {
                            input.get(0) === document.activeElement && (writeBuffer(), pos == mask.replace("?", "").length ? input.caret(0, pos) : input.caret(pos));
                        }, 10);
                    }
                }).on("blur.mask", blurEvent).on("keydown.mask", keydownEvent).on("keypress.mask", keypressEvent).on("input.mask paste.mask", function() {
                    input.prop("readonly") || setTimeout(function() {
                        var pos = checkVal(!0);
                        input.caret(pos), tryFireCompleted();
                    }, 0);
                }), chrome && android && input.off("input.mask").on("input.mask", androidInputEvent),
                    checkVal();
            });
        }
    });
});

jQuery(function($){
    $("#phone").mask("+7 (999) 999-99-99");
});
$(document).ready(function(){
    $("#scroll").on("click","a", "button", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        // event.preventDefault();    //раскомментировать, если будет лагать скролл

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top - 70;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


$( "#arrow" ).click(function() {
    $( "#arrow" ).fadeOut( 1500, function() {
        // Анимация завершена.
    });
});

//blur для блока с цифрами при клике на заказать обратный звонок

var phoneLink = document.querySelector('.phone-link')
var recall = document.querySelector('.btn-to-a')
var blurBlock = document.querySelector('.blur-container')
var footer = document.querySelector('.blur-footer')


phoneLink.addEventListener("click", function(event){

    function Hide () {
        blurBlock.classList.add("blur");
        footer.classList.add("blur");
    }
    setTimeout(Hide, 1500);
});

recall.addEventListener("click", function(event){

    function Hide () {
        blurBlock.classList.add("blur");
        footer.classList.add("blur");
    }
    setTimeout(Hide, 1500);
});

window.addEventListener('scroll', fadeOut);

function fadeOut(){
    if(blurBlock.classList.contains('blur')){
        blurBlock.classList.remove('blur');
        footer.classList.remove('blur');
    }
}

// -------------