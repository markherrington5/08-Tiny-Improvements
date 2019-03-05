const render = function (dataList) {
    // empty kudos div
    $('#kudos').empty();
    // append each item to kudos div
    for (let i = 0; i < dataList.length; i++) {
        $('#kudos').append(
            `<div class='card'>
                <h5>${dataList[i].title}</h5>
                <h6>From: ${dataList[i].from[0].name}</h6>
                <div class='card-body'>
                    <h6>To: ${dataList[i].to[0].name}</h6>
                    <p>${dataList[i].body}</p>
                </div>
            </div>`
        );
    };
};