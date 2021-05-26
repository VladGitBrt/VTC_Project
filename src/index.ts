import { EquipmentItem } from "../lib/interface.dto";
export class Equipment {
  mockEquipment: EquipmentItem = {
    name: "Intel Core 2 Duo",
    equipmentType: "CPU",
    year: "2013",
    inventoryId: 0,
    cost: "150$",
    note: "Mock data",
  };
  idCounter = 1;
  equipmentArray: EquipmentItem[] = [];
  constructor() {
    this.equipmentArray.push(this.mockEquipment);
  }
  addEquipment(
    name: string,
    equipmentType: string,
    year: string,
    cost: string,
    note: string
  ) {
    var newEquipment = {
      name: name,
      equipmentType: equipmentType,
      year: year,
      inventoryId: this.idCounter,
      cost: cost,
      note: note,
    };
    this.idCounter++;
    this.equipmentArray.push(newEquipment);
    console.log(this.equipmentArray);
  }
  addCard(
    name: string,
    equipmentType: string,
    year: string,
    cost: string,
    note: string
  ) {
    let card = document.createElement("div");
    card.innerHTML = `id: ${
      this.idCounter - 1
    }<br> Name: ${name}<br>Equipment Type: ${equipmentType}<br> Year: ${year}<br> Cost: ${cost}<br> Description: ${note}`;
    card.classList.add("itemCard");
    container?.append(card);
  }
}
const equipmentData = new Equipment();
let container = document.getElementById("container");
let btn = document.getElementById("btn");
let addMenu = document.getElementById("addMenu");
let addDel = document.getElementById("addDel");
let hideAdd = document.getElementById("hideAdd");
let hideDel = document.getElementById("hideDel");
let delById = document.getElementById("delById");

(addMenu as HTMLElement).addEventListener("click", () => {
  if (hideAdd?.style.opacity == "") {
    hideAdd.style.opacity = "100%";
    hideAdd.style.display = "block";
  } else if (hideAdd?.style.opacity == "1") {
    hideAdd.style.opacity = "";
    hideAdd.style.display = "none";
  }
});
(addDel as HTMLElement).addEventListener("click", () => {
  if (hideDel?.style.opacity == "") {
    hideDel.style.display = "block";
    hideDel.style.opacity = "100%";
  } else if (hideDel?.style.opacity == "1") {
    hideDel.style.opacity = "";
    hideDel.style.display = "none";
  }
});
(btn as HTMLElement).addEventListener("click", () => {
  alert("Item added");
  let name = document.getElementById("name").value;
  let equipmentType = document.getElementById("equipmentType").value;
  let year = document.getElementById("year").value;
  let cost = document.getElementById("cost").value;
  let note = document.getElementById("note").value;
  equipmentData.addEquipment(name, equipmentType, year, cost, note);
});
(delById as HTMLElement).addEventListener("click", () => {
  let delId = document.getElementById("delId");
  console.log((delId as HTMLInputElement).value);
  if ((delId as HTMLInputElement).value == "") {
    throw new Error("Empty input please enter value");
  } else {
    equipmentData.equipmentArray.forEach((arrItem) => {
      if (arrItem.inventoryId.toString() == (delId as HTMLInputElement).value) {
        let newArr = equipmentData.equipmentArray.filter(
          (element) => element != arrItem
        );
        equipmentData.equipmentArray = newArr;
      } else {
        console.log(`Can't find item`);
      }
    });
    console.log(equipmentData.equipmentArray);
  }
});
