With this simple calculator, you can finally brew your fancy tea at the proper temperature! 

<!--more-->

Usage is very simple. Just input all the infos in the boxes below, and mix your **V_boiled** of boiled water with **V_tap** of tap water to get the desired **T_brew** temperature.

<input name="T_tap" class="water-temperature-tea" type="text" value="20" /> **T_tap** *temperature of the water coming out your tap (Celsius)*

<input name="T_brew" class="water-temperature-tea" type="text" value="70" /> **T_brew** *temperature desired for the brew (Celsius)*

<input name="V_boiled" class="water-temperature-tea" type="text" value="1"/> **V_boiled** *volume of boiled water (Liters)*

<span id="V_tap" style="font-weight:bold;padding:0.5em;background-color:#aaa"></span> **V_tap** *volume of tap water to add to the boiled water (Liters)*

Of course this is a bit approximative, as you most likely don't know the exact temperature of your tap water, and volumes are approximated as well, and mass volumique of water is not temperature-constant, ... blablabla 

<script type="text/javascript">
console.log('BLABLAB')
  // T_tap : temperature of tap water
  // T_brew : final temperature desired
  // V_boiled : volume of boiled water
  var calculate = function(T_tap, T_brew, V_boiled) {
    return V_boiled *  (100 - T_brew) / (T_brew - T_tap)
  }

  var refresh = function() {
    var T_tap = parseFloat(document.querySelector('input[name="T_tap"]').value)
      , T_brew = parseFloat(document.querySelector('input[name="T_brew"]').value)
      , V_boiled = parseFloat(document.querySelector('input[name="V_boiled"]').value)
      , V_tap = calculate(T_tap, T_brew, V_boiled)

    document.querySelector('#V_tap').innerHTML = '' + Math.round(V_tap * 1000) / 1000
  }

  refresh()
  document.querySelector('input.water-temperature-tea').onkeyup = refresh

</script>