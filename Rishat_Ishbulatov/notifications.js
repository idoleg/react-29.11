(function(window) {
    "use-strict";

    var pushElement = document.querySelector(".push");
    var pushImgElement = document.querySelector(".push__image");

    function isPushSupported() {
        if (Notification.permission == "denied") {
            alert("You are blocked");
            return;
        }

        if (!("PushManager" in window)) {
            alert("Push option is not supported in your browser");
            return;
        }

        navigator.serviceWorker.ready.then(function(registartion) {
            registartion.pushManager
                .getSubscription()
                .then(function(subscription) {
                    if (subscription) {
                        changePushStatus(true);
                    } else {
                        changePushStatus(false);
                    }
                })
                .catch(function(err) {
                    console.error("Error ocured: ", err);
                });
        });
    }
    function subscribePush() {
        navigator.serviceWorker.ready.then(function(registartion) {
            if (!registartion.pushManager) {
                alert("push-notifications is not supported in your browser");
                return false;
            }

            registartion.pushManager
                .subscribe({
                    userVisibleOnly: true
                })
                .then(function(subscription) {
                    alert("Suscription succeded");
                    console.info("Your subscribed");
                    console.log(subscription);
                    changePushStatus(true);
                })
                .catch(function(err) {
                    changePushStatus(false);
                    console.error("Error on push subsription: ", err);
                });
        });
    }
    function unsubscribePush() {
        navigator.serviceWorker.ready.then(function(registartion) {
            registartion.pushManager
                .getSubscription()
                .then(function(subscription) {
                    if (!subscription) {
                        alert("Can't unsubscribe push notifications");
                        return;
                    }
                    subscription
                        .unsubscribe()
                        .then(function() {
                            alert("Unsubscribe succeded");
                            console.info("Push canceled");
                            console.log(subscription);
                            changePushStatus(false);
                        })
                        .catch(function(err) {
                            console.error(err);
                        });
                })
                .catch(function(err) {
                    console.error(
                        "Can't unsubscribe push notifications: ",
                        err
                    );
                });
        });
    }
    function changePushStatus(status) {
        pushElement.dataset.checked = status;
        pushElement.checked = status;
        if (status) {
            pushElement.classList.add("active");
            pushImgElement.src = "../images/push-on.png";
        } else {
            pushElement.classList.remove("active");
            pushImgElement.src = "../images/push-off.png";
        }
    }
    pushElement.addEventListener("click", function() {
        var isSubscribed = pushElement.dataset.checked === "true";
        if (!isSubscribed) {
            unsubscribePush();
        } else {
            subscribePush();
        }
    });
    isPushSupported();
})(window);
