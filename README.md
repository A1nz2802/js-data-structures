## Data Structures in JS

### Array vs Stack

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-7btt{border-color:inherit;font-weight:bold;text-align:center;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-0lax{text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <th class="tg-7btt">Array</th>
    <th class="tg-7btt">Stack</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0pky">Data structure consisting of a collection of elements <br>identified by their indexes where <span style="font-weight:bold">first element </span><br><span style="font-weight:bold">is at index Zero</span> </td>
    <td class="tg-0pky">Abstract data type consisting of a collection of elements <br>and implements the LIFO principle</td>
  </tr>
  <tr>
    <td class="tg-0pky">Element are of same data types</td>
    <td class="tg-0pky">Elements can be of different data types</td>
  </tr>
  <tr>
    <td class="tg-0pky">Random access (Read &amp; Write) to any elements <br>at any position via their indexes</td>
    <td class="tg-0pky">Implements LIFO principle so elements are only access<br>at the top (end) via push and pop </td>
  </tr>
  <tr>
    <td class="tg-0pky">Rich in methods/operations, eg: find, sort, join<br>reverse, push, pop...</td>
    <td class="tg-0pky">Limited operations: push, pop, peek</td>
  </tr>
  <tr>
    <td class="tg-0pky">Is also a data type</td>
    <td class="tg-0pky">Is also a abstract data type</td>
  </tr>
  <tr>
    <td class="tg-0lax">Great for when you know about the data you will<br>need for processes and need to make constant<br>changes at any element</td>
    <td class="tg-0lax">Great for dynamic processes where you don't know how<br>much data. You will deal with, quick access and time of<br>data insertion is important</td>
  </tr>
</tbody>
</table>