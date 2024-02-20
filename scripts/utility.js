const allBtn = document.getElementsByClassName('add-btn');
let slot = 0;
let seat = 40;

for (const btn of allBtn) {


    btn.addEventListener('click', function (e) {
        btn.classList.add('bg-[#1DD100]');



        slot = slot + 1;
        //document.getElementById('slot-count').innerText = slot;

        seat = seat - 1;
        //document.getElementById('seat-count').innerText = seat;

        const slotName = e.target.parentNode.childNodes[3].innerText;
        console.log(slotName);

        const selectedContainer = document.getElementById('selected-slot-container');

        const li = document.createElement("li");

        const p = document.createElement("p");
        p.innerText = slotName;

        const p1 = document.createElement("p1");
        p1.innerText = 'Economy';

        const p2 = document.createElement("p2");
        p2.innerHTML = '550';

        li.appendChild(p);
        li.appendChild(p1);
        li.appendChild(p2);

        selectedContainer.appendChild(li);

        const price = p2.innerText;
        const totalPrice = document.getElementById('total-price').innerText;
        const convertedTotalPrice = parseInt(totalPrice);
        const sum = convertedTotalPrice + parseInt(price);

        setInnerText('total-price', sum);
        setInnerText('slot-count', slot);
        setInnerText('seat-count', seat);
        applyCoupon('coupon',sum);
        





    });
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function applyCoupon(id, value) {
    document.getElementById('delete-confirm').addEventListener('keyup', function (event) {
        const text = event.target.value;
        const deleteButton = document.getElementById('btn-delete');
        const coupon1 = 'NEW 15';
        const coupon2 = 'Couple 20';

        if (text === coupon1 || text === coupon2) {
            deleteButton.removeAttribute('disabled');
            document.getElementById('btn-delete').addEventListener('click', function () {
                const total = document.getElementById(id);
                total = value - 0.15;



            });


        }
        else {
            deleteButton.setAttribute('disabled', true);

        }
    });


}

function hideElement(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add("hidden");
}

function showElement(elementID) {
    const element = document.getElementById(elementID);
    element.classList.remove("hidden");
}




