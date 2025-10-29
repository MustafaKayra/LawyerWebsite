const workspaceRow1 = document.querySelector("#workspacerow1")
const workspaceRow2 = document.querySelector("#workspacerow2")
const workspaceRow3 = document.querySelector("#workspacerow3")
const workspaceNextButton = document.querySelector(".workspacenext-button")
const workspacePreviousButton = document.querySelector(".workspaceprevious-button")

const ffaCard = document.querySelectorAll(".ffa-card")
const ffaIcon = document.querySelectorAll(".ffa-icon")
const ffaContentTitle = document.querySelector("#ffaContentTitle")
const ffaContentText = document.querySelector("#ffaContentText")
const ffaContent = document.querySelector(".ffa-content")

const valuesBorder = document.querySelector(".valuesborder")
const dots = document.querySelectorAll(".dot")
const valuesContent = document.querySelector(".valuescontent")


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

if (ffaCard) {
    ffaCard.forEach((card) => {
        card.addEventListener("mouseenter", () => {
            console.log("Mouse içeride")
            const icon = card.querySelector('i')
            icon.style.transition = 'transform 0.3s ease'
            icon.style.transform = "rotate(90deg)"
        })

        card.addEventListener("mouseleave", () => {
            console.log("Mouse dışarıda");
            const icon = card.querySelector('i');
            icon.style.transform = "rotate(0deg)";
        });

        card.addEventListener("click", () => {
            ffaCard.forEach((deletecard) => {
                deletecard.classList.remove("active")
            })
            card.classList.toggle("active")
            ffaContent.style.animation = "none"
            void ffaContent.offsetWidth // Reflow'u zorla (tarayıcının DOM'u yeniden hesaplamasını sağla)
            if (card.id == "ffa1") {
                ffaContent.id = "ffa1-content"
                ffaContent.style.animation = "ffacontentanimation 0.5s"
                ffaContentTitle.textContent = "Avukat tutmak ne kadara mal olur?"
                ffaContentText.textContent = "Avukatlık ücretleri, davanın türüne, karmaşıklığına ve süresine göre değişiklik gösterir. İlk görüşmemizde, davanızın detaylarını dinledikten sonra size şeffaf bir ücretlendirme planı sunuyoruz. Hem maktu ücret hem de başarı primi ile çalışma seçeneklerimiz mevcuttur. Detaylı bilgi için bizimle iletişime geçebilirsiniz."
            } else if (card.id == "ffa2") {
                ffaContent.id = "ffa2-content"
                ffaContent.style.animation = "ffacontentanimation 0.5s"
                ffaContentTitle.textContent = "İlk görüşme ücretsiz mi?"
                ffaContentText.textContent = "Evet, ilk danışma görüşmemiz ücretsizdir. Bu görüşmede davanızı değerlendirir, hukuki haklarınızı açıklar ve size en uygun çözüm yollarını sunarız. Randevu almak için telefon veya e-posta ile bizimle iletişime geçebilirsiniz."
            }  else if (card.id == "ffa3") {
                ffaContent.id = "ffa3-content"
                ffaContent.style.animation = "ffacontentanimation 0.5s"
                ffaContentTitle.textContent = "Davam ne kadar sürer?"
                ffaContentText.textContent = "Davaların süresi, davanın türüne, mahkemenin iş yüküne ve davanın karmaşıklığına göre değişir. Örneğin basit bir alacak davası 6-12 ay sürebilirken, karmaşık ticari davalar birkaç yıl sürebilir. Size davanızın tahmini süresi hakkında ilk görüşmede detaylı bilgi veririz."
            }  else if (card.id == "ffa4") {
                ffaContent.id = "ffa4-content"
                ffaContent.style.animation = "ffacontentanimation 0.5s"
                ffaContentTitle.textContent = "Online görüşme yapabiliyor musunuz?"
                ffaContentText.textContent = "Evet, online görüşme imkanımız mevcuttur. Özellikle farklı şehirlerde yaşayan müvekkillerimiz için video konferans yoluyla danışmanlık hizmeti sunuyoruz. Ancak bazı durumlarda imza gerektiren işlemler için yüz yüze görüşme gerekebilir."
            }  else if (card.id == "ffa5") {
                ffaContent.id = "ffa5-content"
                ffaContent.style.animation = "ffacontentanimation 0.5s"
                ffaContentTitle.textContent = "Hangi konularda hizmet veriyorsunuz?"
                ffaContentText.textContent = "Aile hukuku, iş hukuku, ceza hukuku, ticaret hukuku, gayrimenkul hukuku, miras hukuku, tüketici hukuku, sigorta hukuku ve daha birçok alanda hizmet vermekteyiz. Detaylı uzmanlık alanlarımızı Çalışma Alanlarımız bölümünden inceleyebilirsiniz. Alanımız dışında kalan konularda size yönlendirme yapabiliriz."
            }
        })
    })
}

if (valuesBorder && dots) {
    dots.forEach((dot) => {
        valuesBorder.style.animation = "none"
        const otherDots = Array.from(dots).filter(d => d !== dot)
        dot.addEventListener("mouseenter", () => {
            valuesBorder.style.animation = "valuesborderanimation 0.04s forwards"
            dot.style.animation = "dotbackgroundanimation 0.04s forwards"
            otherDots.forEach((otherDot) => {
                otherDot.style.opacity = "0.5"
            })
        })

        dot.addEventListener("mouseleave", () => {
            valuesBorder.style.animation = "valuesborderafteranimation 0.04s forwards"
            dot.style.animation = "dotbackgroundafteranimation 0.04s forwards"
            otherDots.forEach((otherDot) => {
                otherDot.style.opacity = "1"
            })
        })

        dot.addEventListener("click", () => {
            valuesBorder.style.position = "relative"
            valuesBorder.style.left = "-100px"
            valuesContent.classList.remove("d-none")
            valuesContent.style.animation = "none"
            void valuesContent.offsetWidth // Reflow'u zorla (tarayıcının DOM'u yeniden hesaplamasını sağla)
            console.log(valuesContent.children[0])
            if (dot.id == "adalet") {
                valuesContent.children[0].textContent = "Hukukun temel direği olan adalet, bizim için vazgeçilmezdir. Her davada tarafsız,objektif ve ilkeli bir yaklaşım sergiliyor, hukukun üstünlüğüne olan inancımızla müvekkillerimizin haklarını sonuna kadar savunuyoruz.Adaletin tecellisi için titizlikle çalışıyor, her müvekkilimize eşit ve adil bir hizmet sunuyoruz."
                valuesContent.style.animation = "ffacontentanimation 0.5s"
            } else if (dot.id == "durustluk") {
                valuesContent.children[0].textContent = "Müvekkillerimize karşı her zaman açık sözlü ve dürüst olmak, mesleğimizin temel ilkesidir. Gerçekçi beklentiler oluşturuyor, vaatlerde bulunmak yerine doğru stratejiler geliştiriyoruz. Dürüstlük, uzun vadeli güvenin temelidir ve biz her ilişkide bu değeri ön planda tutuyoruz."
                valuesContent.style.animation = "ffacontentanimation 0.5s"
            } else if (dot.id == "guven") {
                valuesContent.children[0].textContent = "Müvekkil-avukat ilişkisinin en önemli unsuru güvendir. Sizlere emanet ettiğiniz bilgileri gizlilik içinde saklıyor, sadakat ve sorumlulukla hareket ediyoruz. Haklarınızı korurken, her zaman yanınızda olduğumuzu hissettirmek için çalışıyoruz. Güven, bizim için sadece bir değer değil, bir sorumluluktur."
                valuesContent.style.animation = "ffacontentanimation 0.5s"
            } else if (dot.id == "seffaflik") {
                valuesContent.children[0].textContent = "Hukuki süreçler karmaşık olabilir, ancak biz her aşamayı sizinle paylaşıyoruz. Açık ve anlaşılır bir dil kullanarak, davanızın durumunu düzenli olarak bildiriyor, her kararı birlikte alıyoruz. Şeffaf iletişim anlayışımız sayesinde, müvekkillerimiz kendilerini güvende ve bilgili hissediyor."
                valuesContent.style.animation = "ffacontentanimation 0.5s"
            }
        })
    })
}