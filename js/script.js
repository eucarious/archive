
/**
 *         MY ANTI-DEPRESSANTS JUST KICKED
 *              IN ! FANTASTIC !
 *               _________________________
 *              ╱    /\__/\       //     ╲╲
 *           ⊂╱    ( ´∇ ` )     // ⊃     ||╲ フ 🡖
 *    ,´__▔▔▔▔╱  ▔╱▔  ⌒▔▔▔▔╱▔▔▔▔ 🡖▔  ▔▔|
 *  /,╱_ _╱   /-o—/ ___ ╱▔▔╱ ___/\  |     ▔ | /\____|
 * ,========————´=============/⌒ ╲=/=======||🡖 ||	  )
 * | __  | YIPPEE! |   __   "    |⌒| |/    ___/|    )╯
 * )|🞕|_∈≡≡≡≡≡≡≡≡≡∋__|🞕| "  __|| ╯ ╯__ -‒‒‒‒‒┘  ╯ vroom
 * ▔╲ ▔╲__╯▔▔▔▔▔▔▔▔三三三▔╲  ╲__╯ ▔▔     三三三三╯		vroom
 *   三三三三三三三三三三三三三三三三三三三三三三三三三三三三
 *     三三三三三三三三三三三三三三三三三三三三三三三三三三三三
 *
 * https://pastebin.com/Qv6EQTc6
 *
 */

function $(id){
  return document.getElementById(id)
}


toggle_dark = function () {
  var body = document.body
  $("dark-mode").classList.toggle("dark")
  body.classList.toggle("dark")

  if ( $("dark-mode").classList.contains("dark")) {
    $("lamp").innerText = "and a";
    $("brightness").innerText = "dark and dusty archive, manila folders strewn about, barely visible";
  } else {
    $("lamp").innerText = "and a flickering";
    $("brightness").innerText = "dim and dusty archive, manila folders strewn about";
  }
}


window.onload = function () {
  $("dark-mode").onclick = function() {
    toggle_dark();
  }
}