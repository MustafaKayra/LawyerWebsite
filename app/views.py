from django.shortcuts import render

def index(request):
    return render(request,"index.html")

def about(request):
    return render(request,"about.html")

def workspaces(request):
    return render(request,"workspace.html")

def blogs(request):
    return render(request,"blogs.html")

def contact(request):
    return render(request,"contact.html")

def blog(request, slug):
    if slug == "bosanma-davasinda-mal-paylasimi":
        context = {
            "title": "Boşanma Davasında Mal Paylaşımı Nasıl Yapılır?",
            "topic": "Boşanmada mal paylaşımı nasıl yapılır? Edinilmiş mallara katılma rejimi ve haklarınızı koruma yollarını öğrenin.",
            "image": "pexels-ekaterina-bolovtsova-6077181.jpg",
            "content": """
                        Boşanma sürecinde en çok tartışılan konulardan biri mal paylaşımıdır. Türk Medeni Kanunu'na göre,
                        evlilik birliği içinde edinilen tüm mallar "edinilmiş mallar" olarak kabul edilir ve boşanma halinde eşler arasında paylaştırılır.
                        Edinilmiş mallara katılma rejimi, kural olarak eşlerin evlilik boyunca kazandıkları tüm değerlerin yarı yarıya bölünmesini öngörür.
                        Ancak miras yoluyla kazanılan mallar, kişisel eşyalar ve evlilik öncesi sahip olunan varlıklar bu rejimin dışında tutulur.
                        Mal paylaşımı süreci, taraflar arasında anlaşma sağlanamazsa mahkeme tarafından çözülür.""",
            "content2": """
                        Mal paylaşımında haklarınızı korumak için, evlilik süresince edinilen tüm malların listesini çıkarmak ve belgelerini saklamak oldukça önemlidir. Taşınmazlar, araçlar, banka hesapları, şirket hisseleri ve değerli eşyalar bu listeye dahil edilmelidir. Eğer eşlerden biri diğer eşin rızası olmadan malları devretmiş veya zarar vermiş ise, bu durumda mahkeme bu işlemleri iptal edebilir ya da tazminat hükmü verebilir. Boşanma öncesi bir avukattan hukuki destek almak, sürecin daha adil ve hızlı ilerlemesini sağlar. Bizimle iletişime geçerek mal paylaşımı konusunda detaylı bilgi alabilir ve haklarınızı koruyabilirsiniz."""
        }

    elif slug == "isten-cikarilma-sonrasi-tazminat-haklari":
        context = {
            "title": "İşten Çıkarılma Sonrası Tazminat Hakları",
            "topic": "İşten çıkarılma durumunda kıdem ve ihbar tazminatı haklarınızı öğrenin.",
            "image": "pexels-ekaterina-bolovtsova-6077520.jpg",
            "content": """
                        İş akdinin işveren tarafından feshedilmesi durumunda çalışanların belirli koşullar altında tazminat hakları doğar.
                        Kıdem tazminatı, en az bir yıl aynı işyerinde çalışmış ve iş akdi belirli sebeplerle sona ermiş çalışanlara ödenir.
                        İhbar tazminatı ise, işverenin yasal ihbar süresine uymadan iş akdini feshetmesi halinde hak kazanılan bir tazminat türüdür.
                        Haksız fesih durumunda ise, çalışan işe iade davası açabilir veya tazminat talep edebilir. Bu hakların kullanılabilmesi için belirli sürelere ve koşullara dikkat etmek gerekir.""",
            "content2": """
                        Tazminat haklarınızı kullanmak için öncelikle işten çıkarılma nedeninizi ve iş sözleşmenizin türünü iyi bilmelisiniz. İşveren, fesih işlemini yazılı olarak bildirmeli ve gerekçesini açıklamalıdır. Eğer fesih haksız ise veya gerekçe belirsiz ise, çalışan yasal yollara başvurarak haklarını arayabilir. İş mahkemelerinde açılacak davalar genellikle 6-12 ay sürebilir, ancak doğru bir hukuki süreç izlendiğinde tazminat ve diğer haklar kazanılabilir. İşten çıkarılma sonrası haklarınızı öğrenmek ve süreç hakkında bilgi almak için avukat desteği almanız büyük önem taşır."""
        }

    elif slug == "kvkk-nedir-ve-isletmenizi-nasil-etkiler":
        context = {
            "title": "KVKK Nedir ve İşletmenizi Nasıl Etkiler?",
            "topic": "KVKK uyum süreçleri her işletme için zorunludur. İşletmenizin veri güvenliğini nasıl sağlayacağını bu makaleden öğrenin.",
            "image": "pexels-ekaterina-bolovtsova-6077797.jpg",
            "content": """
                        Kişisel Verilerin Korunması Kanunu (KVKK), 2016 yılında yürürlüğe giren ve bireylerin kişisel verilerinin işlenmesi,
                        saklanması ve korunması konusunda düzenlemeler getiren bir kanundur. KVKK'ya göre her türlü kişisel veri,
                        ancak kişinin açık rızası veya kanunda belirtilen diğer hukuki sebeplerle işlenebilir. İşletmeler, çalışanlarının,
                        müşterilerinin ve iş ortaklarının kişisel verilerini toplarken ve işlerken KVKK'ya uygun hareket etmek zorundadır.
                        Aksi takdirde, ağır idari para cezaları ve hukuki yaptırımlarla karşılaşabilirler. Veri güvenliği,
                        aydınlatma yükümlülüğü ve veri sahibinin hakları, KVKK'nın temel ilkelerindendir.""",
            "content2": """
                        İşletmenizin KVKK'ya uyum sağlaması için öncelikle bir veri envanteri oluşturmalı, hangi kişisel verileri topladığınızı ve nasıl işlediğinizi belirlemelisiniz. Çalışanlarınıza ve müşterilerinize aydınlatma metni sunmak, veri güvenliği tedbirleri almak ve gerektiğinde Veri Sorumluları Sicil Bilgi Sistemine (VERBİS) kayıt olmak yasal yükümlülüklerinizdendir. Ayrıca, veri ihlali durumunda Kişisel Verileri Koruma Kurumu'na bildirimde bulunmalısınız. KVKK uyum süreçlerini doğru yönetmek, hem yasal sorunlardan korunmanızı sağlar hem de müşteri güvenini artırır. Uzman hukuki destek alarak işletmenizi KVKK'ya uyumlu hale getirebilirsiniz."""
        }

    elif slug == "kira-sozlesmelerinde-kiraci-ve-ev-sahibi-haklari":
        context = {
            "title": "Kira Sözleşmelerinde Kiracı ve Ev Sahibi Hakları",
            "topic": "Kira uyuşmazlıklarında kiracı ve ev sahibinin hakları nelerdir? Tahliye süreçleri ve yasal haklarınız hakkında bilgi alın.",
            "image": "pexels-metekaan-26646636.jpg",
            "content": """
                        Kira ilişkisi, kiracı ve ev sahibi arasında karşılıklı hak ve yükümlülükler doğurur. Ev sahibi, kiralanan taşınmazı kullanıma uygun şekilde teslim etmekle,
                        kiracı ise kira bedelini zamanında ödemekle yükümlüdür. Kira sözleşmesi yazılı veya sözlü olabilir, ancak ispat kolaylığı açısından yazılı sözleşme tercih edilmelidir.
                        Kira artışı, Türk Borçlar Kanunu ve ilgili düzenlemelere göre belirli oranlarda yapılabilir. Kiracı, kiralananı sözleşmeye ve amacına uygun şekilde kullanmak zorundadır;
                        aksi takdirde ev sahibi tahliye davası açabilir.""",
            "content2": """
                        Kira uyuşmazlıklarında en sık karşılaşılan durumlar; kira bedelinin ödenmemesi, tahliye talepleri ve kiralananın kullanımından kaynaklanan zararlar olarak sıralanabilir. Ev sahibi, kiracı kirayı ödemediğinde veya sözleşme sona erdiğinde tahliye davası açabilir. Kiracı ise, ev sahibinin bakım ve onarım yükümlülüklerini yerine getirmemesi durumunda kira bedelinde indirim talep edebilir veya sözleşmeyi feshedebilir. Kira ilişkilerinde her iki tarafın da haklarını bilmesi ve hukuki süreçleri doğru yönetmesi önemlidir. Kira uyuşmazlıklarında profesyonel hukuki destek almak, sorunların en kısa sürede çözülmesini sağlar."""
        }

    elif slug == "miras-hukukunda-sakli-pay-ve-tenkis-davasi":
        context = {
            "title": "Miras Hukukunda Saklı Pay ve Tenkis Davası",
            "topic": "Saklı pay nedir ve tenkis davası ne zaman açılır? Miras haklarınızı korumak için bilmeniz gerekenleri keşfedin.",
            "image": "pexels-sora-shimazaki-5669602.jpg",
            "content": """
                        Miras hukuku, kişinin ölümü sonrasında malvarlığının mirasçılarına nasıl geçeceğini düzenler.
                        Türk Medeni Kanunu'na göre, mirasçıların bir kısmı "saklı paylı mirasçılar" olarak kabul edilir ve mirastan en az belirli bir pay alma hakkına sahiptir.
                        Saklı paylı mirasçılar; altsoy (çocuklar ve torunlar), ana-baba ve eştir. Mirasbırakan, vasiyetname ile malvarlığını özgürce tasarruf edebilir,
                        ancak saklı payları ihlal edemez. Eğer saklı pay, vasiyetname veya sağlar arası işlemlerle ihlal edilirse, mirasçılar tenkis davası açarak haklarını geri alabilir.""",
            "content2": """
                        Tenkis davası, saklı payı ihlal edilen mirasçıların, mirasbırakanın yaptığı tasarrufları iptal ettirmek veya eksik kalan paylarını tamamlamak için açtığı bir davadır. Bu dava, mirasın açıldığı tarihten itibaren belirli bir süre içinde açılmalıdır; aksi takdirde hak düşürücü süre nedeniyle dava hakkı kaybedilebilir. Tenkis davasında, öncelikle saklı pay oranı hesaplanır ve ihlal edilen miktar belirlenir. Mahkeme, ihlal edilen kısmı geri alınması veya tazminat ödenmesi yönünde karar verebilir. Miras haklarınızı korumak ve tenkis davası süreci hakkında detaylı bilgi almak için hukuki danışmanlık almanız faydalı olacaktır."""
        }

    elif slug == "trafik-kazalarinda-sigorta-tazminat-sureci":
        context = {
            "title": "Trafik Kazalarında Sigorta Tazminat Süreci",
            "topic": "Trafik kazası sonrası sigorta tazminatı nasıl alınır? Hasar tespitinden dava sürecine kadar tüm aşamaları öğrenin.",
            "image": "pexels-sora-shimazaki-5669619.jpg",
            "content": """
                        Trafik kazası geçirdiğinizde, sigorta şirketinden tazminat alma süreci bazen karmaşık ve uzun olabilir.
                        Kaza sonrasında ilk yapılması gereken, kaza tespit tutanağı düzenletmektir. Bu tutanak, kazanın nasıl gerçekleştiğini, kusur oranlarını ve hasarın boyutunu belirler.
                        Ardından, zarar gören taraf sigorta şirketine hasar bildiriminde bulunur ve ekspertiz raporu hazırlanır.
                        Sigorta şirketi, hasar miktarını belirler ve tazminat önerisinde bulunur. Ancak bazı durumlarda sigorta şirketleri düşük teklif yapabilir veya tazminat ödemeyi reddedebilir.""",
            "content2": """
                        Sigorta şirketinin teklifi kabul edilmezse, arabuluculuk veya dava yoluyla haklar aranabilir. Arabuluculuk, daha hızlı bir çözüm yolu olup, taraflar anlaşmaya varırsa süreç kısa sürede sonuçlanır. Anlaşma sağlanamazsa, tazminat davası açılır ve mahkeme, kusur oranlarına göre tazminat miktarını belirler. Maddi hasar yanında, kazazedeler manevi tazminat da talep edebilir. Sürecin doğru yönetilmesi ve haklarınızın eksiksiz alınması için deneyimli bir avukattan destek almanız büyük önem taşır. Trafik kazası sonrası haklarınızı korumak için bizimle iletişime geçebilirsiniz."""
        }

    return render(request,"blog.html",context)
