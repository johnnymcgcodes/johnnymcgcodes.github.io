(()=>{"use strict";class e{constructor(e,t,n,a){this.taskTitle=e,this.description=t,this.project=n,this.dueDate=a}}class t{static displayTask(){n.getTasks().forEach((e=>t.addTaskToList(e)))}static addTaskToList(e){const t=document.querySelector(`#task-list-${e.project}`),n=document.createElement("tr");n.innerHTML=`\n      <td> ${e.taskTitle}</td>\n      <td> ${e.description}</td>\n      <td> ${e.dueDate}</td>\n      <td> ${e.project}</td>\n      <td><a href="#" class="btn btn-danger btn-sm delete">X</a> </td>\n    `,t.appendChild(n)}static deleteTask(e){e.classList.contains("delete")&&e.parentElement.parentElement.remove()}static showAlert(e,t){const n=document.createElement("div");n.className=`alert alert-${t}`,n.appendChild(document.createTextNode(e));const a=document.querySelector(".container"),s=document.querySelector("#task-form");a.insertBefore(n,s),setTimeout((()=>document.querySelector(".alert").remove()),4e3)}static clearFields(){document.querySelector("#taskTitle").value="",document.querySelector("#description").value="",document.querySelector("#dueDate").value="",document.querySelector("#project").value=""}}class n{static getTasks(){let e;return e=null===localStorage.getItem("tasks")?[]:JSON.parse(localStorage.getItem("tasks")),e}static addTask(e){console.log("also here");const t=n.getTasks();t.push(e),localStorage.setItem("tasks",JSON.stringify(t))}static removeTask(e){console.log("finally here");const t=n.getTasks();t.forEach(((n,a)=>{e!==n.project&&t.splice(a,1)})),localStorage.setItem("tasks",JSON.stringify(t)),console.log("Finished removing tasks from local")}}function a(){let e=[...document.querySelector(".nav-tabs").children];e.forEach(((t,n)=>{let a=t.firstElementChild.id;document.getElementById(a).addEventListener("click",(function(){document.getElementById(a).className="nav-link active",document.getElementById(`${a}_tasks`).className="tab-pane fade active show",e.forEach(((t,a)=>{if(a!==n){e[a].className="nav-link inactive",e[a].firstElementChild.className="nav-link";let t=e[a].firstElementChild.id;document.getElementById(`${t}_tasks`).className="tab-pane fade inactive"}}))}))}))}document.addEventListener("DOMContentLoaded",t.displayTasks),document.querySelector("#table-ondeck").addEventListener("click",(e=>{t.deleteTask(e.target),n.removeTask(e.target.parentElement.previousElementSibling.textContent),t.showAlert("Task removed","success")})),document.querySelector("#table-dugout").addEventListener("click",(e=>{t.deleteTask(e.target),n.removeTask(e.target.parentElement.previousElementSibling.textContent),t.showAlert("Task removed","success")})),document.querySelector("#table-atbat").addEventListener("click",(e=>{t.deleteTask(e.target),n.removeTask(e.target.parentElement.previousElementSibling.textContent),t.showAlert("Task removed","success")})),function(){var e=new Date,t=e.getDate(),n=e.getMonth()+1,a=e.getFullYear(),s=a+1;t<10&&(t="0"+t),n<10&&(n="0"+n);var l=new Date;e=a+"-"+n+"-"+t,l=s+"-"+n+"-"+t,document.getElementById("dueDate").setAttribute("min",e),document.getElementById("dueDate").setAttribute("max",l)}(),document.getElementById("newtask").addEventListener("click",(function(){document.getElementById("task-form").style.display="initial",document.getElementById("project-form").style.display="none"})),document.getElementById("newproject").addEventListener("click",(function(){document.getElementById("project-form").style.display="initial",document.getElementById("task-form").style.display="none"})),document.getElementById("task-add").addEventListener("click",(a=>{a.preventDefault();const s=document.querySelector("#taskTitle").value,l=document.querySelector("#description").value,d=document.querySelector("#project").value,o=document.querySelector("#dueDate").value;if(""===s||""===l||""===d||""===o)t.showAlert("Form not complete","danger");else{const a=new e(s,l,d,o);t.addTaskToList(a),n.addTask(a),t.showAlert("task added","success"),t.clearFields(),(document.getElementById("task-form").style.display="initial")&&(document.getElementById("task-form").style.display="none")}})),document.getElementById("project-add").addEventListener("click",(e=>{e.preventDefault();const t=document.querySelector(".nav-tabs"),n=document.createElement("li");n.className="nav-item";const s=document.createElement("a");s.className="nav-link",s.setAttribute("data-toggle","tab");const l=document.getElementById("projectName").value;s.innerText=l,s.href=`#${l}`,s.id=`${l}`,t.appendChild(n),n.appendChild(s);let d=document.createElement("div");d.className="tab-pane fade",d.id=`${l}_tasks`,d.innerHTML=`\n  <table class="table table-striped mt-5" id="table-${l}">\n            <thead>\n              <th>Task</th>\n              <th>Description</th>\n              <th>Project</th>\n              <th>Due Date</th>\n              <th></th>\n            </thead>\n            <tbody id="task-list-${l}"></tbody>\n          </table>`,document.getElementById("myTabContent").appendChild(d),a(),(document.getElementById("project-form").style.display="initial")&&(document.getElementById("project-form").style.display="none"),console.log("yes")})),t.displayTask(),a()})();