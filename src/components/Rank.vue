<script setup>
import config from '../config';
import { computed, ref } from 'vue';

const res = ref(null);

const poll = () => {
    fetch(config.api_url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            res.value = data;
        })
        .catch(error => {
        });
}

setInterval(poll, config.pollInterval);

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const problems = computed(() => {
    let arr = [];
    for (let i = 0; i < res.value?.problemCount ?? 0; ++i) {
        arr.push(i);
    }
    return arr;
});

const headers = computed(() => {
    let arr = [
        { text: '排名', value: 'rank' },
        { text: '参赛者', value: 'participant' },
        { text: '通过数', value: 'solved' },
        { text: '罚时', value: 'penalty' }
    ];
    for (let problem of problems.value) {
        arr.push({
            text: alphabet[problem],
            value: alphabet[problem]
        });
    }
    return arr;
});

const genScore = submission => {
    const accepted = submission.status == 'Accepted';
    const tries = submission.tries;
    return `${accepted ? '+' : '-'}${accepted ? (tries == 1 ? '' : tries) : submission.tries}`;
}

const genStyle = submission => {
    return {
        // color: submission.status == 'Accepted' ? '#CBFFA9' : '#FF9B9B',
        'background-color': submission.status == 'Accepted' ? '#6BCB77B0' : '#FF6B6BB0',
        '--highlight-alpha': 0.5
    };
}

const items = computed(() => {
    let arr = [];
    for (let record of res.value?.records ?? []) {
        let item = {
            rank: arr.length + 1,
            participant: `${record.participantDepartment} - ${record.participantName}`,
            solved: record.solved,
            penalty: record.penalty
        };
        for (let problem of problems.value) {
            item[alphabet[problem]] = genScore(record.submissions[problem]);
        }
        arr.push(item);
    }
    return arr;
})

const pageIndex = ref(0);

const nextPage = () => {
    const table = document.getElementById('pageTbody');
    ++pageIndex.value;
    console.log(table.childElementCount);
    if (table.childElementCount < config.eachPage) {
        pageIndex.value = 0;
    }
}

setInterval(nextPage, config.nextPageInterval);

</script>

<template>
    <table>
        <thead>
            <tr>
                <th>排名</th>
                <th>参赛者</th>
                <th>通过数</th>
                <th>罚时</th>
                <th v-for="problem in problems">{{ alphabet[problem] }}</th>
            </tr>
        </thead>
        <tbody id="pageTbody">
            <tr
                v-for="(record, index) in (res?.records?.slice(pageIndex * config.eachPage, (pageIndex + 1) * config.eachPage) ?? [])">
                <td>{{ pageIndex * config.eachPage + index + 1 }}</td>
                <td>{{ record.participantDepartment }} - {{ record.participantName }}</td>
                <td>{{ record.solved }}</td>
                <td>{{ record.penalty }}</td>
                <td class="score" :style="genStyle(record.submissions[problem])" v-for="problem in problems">
                    {{ genScore(record.submissions[problem]) }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped lang="scss">
tr {

    td,
    th {
        text-align: center;

        &:nth-child(1) {
            text-align: right;
        }

        &:nth-child(2) {
            text-align: left;
        }

    }
}

th,
td {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: #fff;
}

th {
    text-align: left;
}

thead {
    th {
        background-color: #55608f;
    }
}

tbody {
    tr:hover {
        --highlight-alpha: 0.4;
        background-color: rgba(255, 255, 255, var(--highlight-alpha)) !important;
    }

    td {
        position: relative;
        --highlight-alpha: 0.2;

        &:hover {
            &:before {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                top: -9999px;
                bottom: -9999px;
                z-index: -1;
                background-color: rgba(255, 255, 255, var(--highlight-alpha));
            }
        }
    }
}
</style>
