const workspaceRow1 = document.querySelector("#workspacerow1")
const workspaceRow2 = document.querySelector("#workspacerow2")
const workspaceRow3 = document.querySelector("#workspacerow3")
const workspaceNextButton = document.querySelector(".workspacenext-button")
const workspacePreviousButton = document.querySelector(".workspaceprevious-button")

if (workspaceNextButton && workspacePreviousButton) {
    let activeWrapper = document.querySelector(".workspace-row:not(.d-none)");
    console.log(workspaceRow1.style)
    workspaceNextButton.addEventListener("click", () => {
        if (activeWrapper.id == "workspacerow1") {
            workspaceRow1.style.transform = "translateX(0px)"
            workspaceRow1.style.animation = "aftertranslateanimation 0.5s forwards"
            workspaceRow1.addEventListener("animationend", () => {
                workspaceRow1.className = "row workspace-row d-flex justify-content-center my-5 d-none"
                workspaceRow2.className = "row workspace-row d-flex justify-content-center my-5"
                workspaceRow2.style.transform = "translateX(-2000px)"
                workspaceRow2.style.animation = "translateanimation 0.5s forwards"
                activeWrapper = document.querySelector("#workspacerow2")
            }, { once: true })
        }

        else if (activeWrapper.id == "workspacerow2") {
            workspaceRow2.style.transform = "translateX(0px)"
            workspaceRow2.style.animation = "aftertranslateanimation 0.5s forwards"
            workspaceRow2.addEventListener("animationend", () => {
                workspaceRow2.className = "row workspace-row d-flex justify-content-center my-5 d-none"
                workspaceRow3.className = "row workspace-row d-flex justify-content-center my-5"
                workspaceRow3.style.transform = "translateX(-2000px)"
                workspaceRow3.style.animation = "translateanimation 0.5s forwards"
                activeWrapper = document.querySelector("#workspacerow3")
            }, { once: true })
        }

        else if (activeWrapper.id == "workspacerow3") {
            workspaceRow3.style.transform = "translateX(0px)"
            workspaceRow3.style.animation = "aftertranslateanimation 0.5s forwards"
            workspaceRow3.addEventListener("animationend", () => {
                workspaceRow3.className = "row workspace-row d-flex justify-content-center my-5 d-none"
                workspaceRow1.className = "row workspace-row d-flex justify-content-center my-5"
                workspaceRow1.style.transform = "translateX(-2000px)"
                workspaceRow1.style.animation = "translateanimation 0.5s forwards"
                activeWrapper = document.querySelector("#workspacerow1")
            }, { once: true })
        }
    })

    workspacePreviousButton.addEventListener("click", () => {
        if (activeWrapper.id == "workspacerow1") {
            workspaceRow1.style.transform = "translateX(0px)"
            workspaceRow1.style.animation = "beforetranslateanimation 0.5s forwards"
            workspaceRow1.addEventListener("animationend", () => {
                workspaceRow1.className = "row workspace-row d-flex justify-content-center my-5 d-none"
                workspaceRow3.className = "row workspace-row d-flex justify-content-center my-5"
                workspaceRow3.style.transform = "translateX(2000px)"
                workspaceRow3.style.animation = "translateanimation 0.5s forwards"
                activeWrapper = document.querySelector("#workspacerow3")
            }, { once: true })
        }

        else if (activeWrapper.id == "workspacerow3") {
            workspaceRow3.style.transform = "translateX(0px)"
            workspaceRow3.style.animation = "beforetranslateanimation 0.5s forwards"
            workspaceRow3.addEventListener("animationend", () => {
                workspaceRow3.className = "row workspace-row d-flex justify-content-center my-5 d-none"
                workspaceRow2.className = "row workspace-row d-flex justify-content-center my-5"
                workspaceRow2.style.transform = "translateX(2000px)"
                workspaceRow2.style.animation = "translateanimation 0.5s forwards"
                activeWrapper = document.querySelector("#workspacerow2")
            }, { once: true })
        }

        else if (activeWrapper.id == "workspacerow2") {
            workspaceRow2.style.transform = "translateX(0px)"
            workspaceRow2.style.animation = "beforetranslateanimation 0.5s forwards"
            workspaceRow2.addEventListener("animationend", () => {
                workspaceRow2.className = "row workspace-row d-flex justify-content-center my-5 d-none"
                workspaceRow1.className = "row workspace-row d-flex justify-content-center my-5"
                workspaceRow1.style.transform = "translateX(2000px)"
                workspaceRow1.style.animation = "translateanimation 0.5s forwards"
                activeWrapper = document.querySelector("#workspacerow1")
            }, { once: true })
        }
    })
}