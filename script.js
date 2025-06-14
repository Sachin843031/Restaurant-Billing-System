const billingForm = document.getElementById("billingForm");
const billTableBody = document.getElementById("billTableBody");
const grandTotalElem = document.getElementById("grandTotal");

let total = 0;

billingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const itemSelect = document.getElementById("item");
    const selectedItem = itemSelect.options[itemSelect.selectedIndex];
    const itemName = selectedItem.value;
    const price = parseInt(selectedItem.getAttribute("data-price"));
    const quantity = parseInt(document.getElementById("quantity").value);
    const itemTotal = price * quantity;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${itemName}</td>
      <td>₹${price}</td>
      <td>${quantity}</td>
      <td>₹${itemTotal}</td>
    `;
    billTableBody.appendChild(row);

    total += itemTotal;
    const totalItems = document.querySelectorAll("#billTableBody tr").length;

    document.getElementById("totalItems").textContent = totalItems;
    document.getElementById("summaryTotal").textContent = `₹${total}`;
    document.getElementById("summaryPayment").textContent = document.getElementById("paymentMethod").value;

    grandTotalElem.textContent = `₹${total}`;

    billingForm.reset();
});
function printReceipt() {
  window.print();
}
