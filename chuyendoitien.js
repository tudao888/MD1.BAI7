<table>
    <!--    //dòng 1-->
    <tr>
        <th>Amount</th>
        <th>From Currency</th>
        <th>To Currency</th>
    </tr>
    <!--    // dòng 2-->
    <tr>
        <td><input type="text" id="nhapsotien"></td>
        <td>
            <select name="" id="select1">
                <option value="a">VND</option>
                <option value="b">USD</option>
            </select>
        </td>
        <td>
            <select name="" id="select2">
                <option value="a">VND</option>
                <option value="b">USD</option>
            </select>
        </td>
        <td>
            <button onClick="lamgido()">Convert</button>
        </td>
    </tr>
</table>
<script>
    function lamgido() {
    let dauvao = document.getElementById('nhapsotien').value;
    let giatri2 = document.getElementById('select1').value;
    let giatri3 = document.getElementById('select2').value;
    if (giatri2 == giatri3) {
    alert("Result:" + dauvao);
}
    if (giatri2 == "a" && giatri3 == "b") {
    alert("Result:" + dauvao/24000);
}
    if (giatri2 == "b" && giatri3 == "a") {
    alert("Result:" + dauvao*2400)
}
}

</script>