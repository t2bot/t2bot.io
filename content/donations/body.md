---
# You don’t need to declare anything in the frontmatter
---

t2bot.io is completely free to use, though donations are graciously appreciated to help offset
the cost of operating.

<img src="/assets/img/promo/donate-cropped.png" style="width: 114px; vertical-align: bottom; margin-right: 8px;"/>
<script src="https://liberapay.com/turt2live/widgets/receiving.js"></script>

<noscript><a href="https://liberapay.com/turt2live/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a></noscript>

Other options for donating include:

* [Credit card, Google Pay, Apple Pay](https://donate.stripe.com/fZeaI0eC95rx9QQdQQ)
* BTC: `3C7MWPcnYDWDW6RYRE3kcKSpZjnMZgerQv`
* ETH: `0xeC06c80825A751D4891D53744771b4a18D57e530`

# Cost of operation

It takes a lot to run t2bot.io on a monthly basis. Here's a breakdown on the financial cost:

<table class="financials">
<thead>
  <tr>
    <td></td>
    <td>Nov 2022 (CAD)</td>
    <td>Monthly increase</td>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Homeserver & database</td>
    <td>$ 490.78</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Integrations & monitoring</td>
    <td>$ 200.87</td>
    <td>-</td>
  </tr>
  <tr>
    <td>Media/content uploads</td>
    <td>$ 735.70</td>
    <td>+$ 30/mo</td>
  </tr>
  <tr class="total">
    <td>Total</td>
    <td>$ 1427.35</td>
    <td>+$ 30/mo</td>
  </tr>
</tbody>
</table>

Since this page's last update, the service would cost <b id="current-cost">$unknown</b> this month.

<script type="text/javascript">
  const flatCost = 490.78 + 200.87 + 735.70;
  const incPerMonth = 30;
  const lastUpdate = new Date(2022, 10, 1); // November 1st, because dates are weird
  const now = new Date();
  let months = (now.getFullYear() - lastUpdate.getFullYear()) * 12;
  months -= lastUpdate.getMonth();
  months += now.getMonth();
  document.getElementById("current-cost").innerText = `$ ${Math.round((flatCost + (incPerMonth * months)) * 100) / 100} CAD`;
</script>