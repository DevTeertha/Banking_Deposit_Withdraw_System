        //Login Area
        var loginArea = document.getElementById('login-area');
        var username = document.getElementById('username');
        var password = document.getElementById('password');

        //Input Fields
        var withdrawAmount = document.getElementById('withdraw-field');

        //Button
        const loginButton = document.getElementById('login');
        const depositButton = document.getElementById('deposit-btn');
        const withdrawButton = document.getElementById('withdraw-btn');

        //Elements
        var currentWithdraw = document.getElementById('current-withdraw');
        var currentBalance = document.getElementById('current-balance');

        //Login Area
        function loginNow() {
            if (username.value == "admin" && password.value == "admin") {
                alert("Success!");
                loginArea.style.display = 'none';
                username.value = "";
                password.value = "";
            }
            else {
                alert("Wrong Username/Password!");
                username.value = "";
                password.value = "";
            }
        }
        loginButton.addEventListener('click', loginNow);

        //Transaction Area
        //UpdateText
        function updateDepositText(id , depositNumber) {
            var current = document.getElementById(id);
            var currentNumber = parseFloat(current.innerText);
            var totalAmount = depositNumber + currentNumber;
            current.innerText = totalAmount;
        }

        //Convert Input Filed Number To Float
        function convertFloat(id){
            var amount = document.getElementById(id);
            var number = parseFloat(amount.value);
            return number;
        }


        //deposit
        function deposit() {
            var depositNumber = convertFloat('deposit-field');
            if (document.getElementById('deposit-field').value == "") {
                alert("Please Enter Deposit Amount");
            }
            else {
                updateDepositText('current-deposit',depositNumber);
                updateDepositText('current-balance',depositNumber);
                document.getElementById('deposit-field').value = "";
            }
        }
        depositButton.addEventListener('click', deposit);

        //withdraw
        function withdraw() {
            var withdrawNumber = convertFloat('withdraw-field');
            var currentWithdrawNumber = parseFloat(currentWithdraw.innerText);
            var currentBalanceNumber = parseFloat(currentBalance.innerText);
            if (currentBalanceNumber == 0) {
                alert("Your Balance is empty");
                withdrawAmount.value = "";
            }
            else if (withdrawNumber > currentBalanceNumber) {
                alert("You Have Not Enough Balance");
                withdrawAmount.value = "";
            }
            else if (withdrawAmount.value == "") {
                alert("Please Enter Withdraw Amount");
            }
            else {
                var totalWithdraw = withdrawNumber + currentWithdrawNumber;
                currentWithdraw.innerText = totalWithdraw;
                var totalBalance = currentBalanceNumber - totalWithdraw;
                currentBalance.innerText = totalBalance;
                withdrawAmount.value = "";
            }
        }
        withdrawButton.addEventListener('click', withdraw);