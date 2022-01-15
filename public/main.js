console.log('我是main.js2');
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    let n = 1
    request.open('GET', `/page${n+1}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response);
            array.forEach((item) => {
                const li = document.createElement('li')
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n++;
        }

    }
    request.send()
}
getJson.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const object = JSON.parse(request.response)
            console.log(object);
            myName.textContent = object.name;
        }
    }
    request.send();
}
getXml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseXML);

            const dom = request.responseXML;
            //responseXML生成一个DOM对象，里面是 //<message><warning> Hello World</warning> </message>
            const text = dom.getElementsByTagName('warning')[0].textContent.trim();
            console.log(text); //Hello World

        }
    }
    request.send();
}
getHtml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('下载完成');
            console.log(request.status);
            if (request.status >= 200 && request.status < 300) {
                console.log(request.status);
                const div = document.createElement('div');
                div.innerHTML = request.response;
                document.body.appendChild(div)
            } else {
                alert('加载HTML失败')
            }
        }
    }
    request.send();
}
getJs.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js')
    request.onload = () => {
        console.log(request.response);
        const script = document.createElement('script');
        script.innerHTML = request.response;
        document.body.appendChild(script);
    }
    request.onerror = () => {}
    request.send();
}
getCss.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onload = () => {
        console.log('request.response');
        console.log(request.response);
        console.log('成功了');
        const style = document.createElement('style');
        style.innerHTML = request.response;
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log('失败了');
    }
    request.send();
}