

const allBtn = document.getElementsByClassName('add-btn');
let slot = 0;
let seat = 40;
let selected = 0;
const maxSelection = 4;




for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {

        if (selected<maxSelection) {
            btn.classList.add('bg-[#1DD100]');
            selected++;

            slot = slot + 1;
            seat = seat - 1;
            
            const slotName = e.target.innerText;
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


            totalPrice('total-price', p2);
            details();
            grandTotal();
            setInnerText('slot-count', slot);
            setInnerText('seat-count', seat);

        }


    });
}

function totalPrice(id, value) {
    const price = value.innerText;
    const totalPrice = document.getElementById('total-price').innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const sum = convertedTotalPrice + parseInt(price);
    setInnerText('total-price', sum);

}

function grandTotal() {
    const totalPrice = document.getElementById('total-price').innerText;
    const convertedTotalPrice = parseInt(totalPrice);


    const applyBtn = document.getElementById('apply-confirm');
    applyBtn.addEventListener('keyup', function (event) {
        const text = event.target.value;
        const applyButton = document.getElementById('btn-apply');

        if (text === 'NEW 15') {
            applyButton.removeAttribute('disabled');
            applyButton.onclick = function () {
                setInnerText('grand-total', convertedTotalPrice - 100 * 0.15);
                hideElement('couponField');

            }

        }
        else if (text === 'Couple 20') {
            applyButton.removeAttribute('disabled');
            applyButton.onclick = function () {
                setInnerText('grand-total', convertedTotalPrice - 100 * 0.20);
                hideElement('couponField');

            }
        }
        else {
            setInnerText('grand-total', convertedTotalPrice);
        }



    });
}

function details() {

    const name = document.getElementById('name');
    name.addEventListener('keyup', function (event) {
        const text = event.target.value;
        const applyButton = document.getElementById('details');

        if (text.length != 0) {
            const modal = document.getElementById('my_modal_1');
            applyButton.removeAttribute('disabled');
            applyButton.onclick = function () {
                modal.showModal();
            }
        }
    });


    /*const inputField = document.getElementsByClassName('inputs');
    inputField.addEventListener('keyup', function(event){
        const text = event.target.value;
        const applyButton = document.getElementById('details');
        const modal = document.getElementById('my_modal_1');

        if (text.length != 0) {
            
            applyButton.removeAttribute('disabled');
            applyButton.onclick = function () {
                modal.showModal();
            }
        }


    }); */


}





function hideElement(elementID) {
    const element = document.getElementById(elementID);
    element.classList.add("hidden");
}


function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}







