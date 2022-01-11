const $link = 'https://github.com';

document.querySelector('.logo').addEventListener('click', e => {
    window.open($link);
    console.log('링크');
});

const URL = 'https://api.github.com';



// 프로필 렌더링 함수
function renderingProfile() {
    let userId = document.getElementById('search').value;
    const result = fetch(URL + '/users/' + `${userId}`, {
        headers: {
            Authorization: "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"
        },
    });
    

    result.then(res => res.json())
    .then(user => {
            
         // 사진
        document.querySelector('.card div:first-child img')
                    .setAttribute('src', user.avatar_url);
        // 프로필
        document.getElementById('user-id').textContent = user.login;
        document.getElementById('user-name').textContent = user.name;
        document.getElementById('followers').textContent = user.followers;
        document.getElementById('following').textContent = user.following;
        document.getElementById('public-repos').textContent = user.public_repos;
        });

        const result2 = fetch(URL + '/users/' + `${userId}` + '/repos' ,{
            headers: {
                Authorization: "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"
            },
        });
        result2.then(res => res.json())
    .then(userRepos => {
        console.log(userRepos);
        // 저장소 이름
        document.querySelector('.repo1 a').setAttribute('href', userRepos[0].html_url);
        document.querySelector('.repo1-name').textContent = userRepos[0].name;

        document.querySelector('.repo2 a').setAttribute('href', userRepos[1].html_url);
        document.querySelector('.repo2-name').textContent = userRepos[1].name;

        document.querySelector('.repo3 a').setAttribute('href', userRepos[2].html_url);
        document.querySelector('.repo3-name').textContent = userRepos[2].name;

    });

}

// 프로필카드오픈 이벤트
function openProfileCard() {
    document.querySelector('.card').style.display = 'flex';
}


// 검색버튼 이벤트
const $search = document.querySelector('.search-img i');
$search.addEventListener('click', e => {
    
    const $input = document.querySelector('.search-box input');
    if ($input.value.trim() === '') {
    
        $input.setAttribute('placeholder', '바르게 입력하세요.');
    } else {
        openProfileCard();
        renderingProfile();
    }
    let userId = document.getElementById('search').value;
    
    const result = fetch(URL + '/' + `${userId}`);
    console.log(result);
    result.then(res => res.json())
        .then(user => {
            console.log(user);
            let keyName = [];
            for(let key in user) {
                
                keyName.push(key)
            }
            console.log(keyName);
        });

});




// 즉시실행 함수

(function() {

})();
