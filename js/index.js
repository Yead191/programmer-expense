



// calculate
let count = 0;

const calculatebtn = document.getElementById('calculate')

calculatebtn.addEventListener('click', function () {
    count += 1
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses


    const resExpenses = document.getElementById('total-expenses')
    resExpenses.innerText = totalExpenses
    const resBalance = document.getElementById('balance')
    resBalance.innerText = balance

    const result = document.getElementById('results')
    result.classList.remove('hidden')


    // history item
    const historyItem = document.createElement("div")
    historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo 500'
    historyItem.innerHTML = `
    <p class= "text-xs text-gray-500 font-bold">Serial: ${count}</p>
    <p class= "text-xs text-gray-500">${new Date().toLocaleDateString() }</p>
    <p class= "text-xs text-gray-500">Income: $${income.toFixed(2)}</p>
    <p class= "text-xs text-gray-500">Expense: $${totalExpenses.toFixed(2)}</p>
    <p class= "text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>
    `
    const historyContainer = document.getElementById('history-list')
    historyContainer.insertBefore(historyItem, historyContainer.firstChild)


})


// savings
const calSavings = document.getElementById('calculate-savings')
calSavings.addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses


    const resExpenses = document.getElementById('total-expenses')
    resExpenses.innerText = totalExpenses
    const resBalance = document.getElementById('balance')
    resBalance.innerText = balance


    const savingsInput = document.getElementById('savings').value

    const totalSavings = balance * savingsInput / 100
    const savingsAmount = document.getElementById('savings-amount')
    savingsAmount.innerText = totalSavings.toFixed(2)

    const finalBalance = balance - totalSavings
    const remainingBalance = document.getElementById('remaining-balance')
    remainingBalance.innerText = finalBalance.toFixed(2)


})




// history button
const assistant = document.getElementById('assistant-tab')


const history = document.getElementById('history-tab')
history.addEventListener('click', function () {
    history.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    assistant.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    assistant.classList.add('text-gray-600')


    document.getElementById('expense-form').classList.add('hidden')

    document.getElementById('history-section').classList.remove('hidden')
    document.getElementById('results').classList.remove('hidden') 



})

assistant.addEventListener('click', function(){
    assistant.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600','text-gray-600')
    history.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600')
    document.getElementById('expense-form').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('results').classList.add('hidden') 

})