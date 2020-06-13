
const state={
    info: {
        death: [],
        infected: [],
        date: [],
        alive:[],
        countries:[],
        globalCheck:'',
    },
    card:{
        confirmed:'',
        recovered:'',
        deaths:'',
        lastUpdate:''
    }
};

const getters={
    currentDeath: (state) => state.info.death,
    currentInfected:(state)=> state.info.infected,
    currentDate:(state)=>state.info.date,
    getCountries:(state)=>state.info.countries,
    currentAlive: (state)=>state.info.alive,
    getConfirmed:(state)=>state.card.confirmed,
    getRecovered:(state)=> state.card.recovered,
    getDeaths:(state)=>state.card.deaths,
    getUpdate:(state)=>state.card.lastUpdate,
    getGlobal:(state)=>state.info.globalCheck,
};
const actions={
    async fetchData({commit}){
        const response = await fetch('https://covid19.mathdro.id/api/daily');
        const data = await response.json();
        commit('dataGlobal',data);
    },
    async fetchCountries({commit}){
        const response = await fetch('https://covid19.mathdro.id/api/countries');
        const data = await response.json();
        commit('allCountries',data.countries);
    },
    async fetchCountryData({commit},country){
            const response = await fetch(`https://covid19.mathdro.id/api/countries/${country}`);
            const stats = await response.json();
            commit('dataByCountry',stats);
    },
    async fetchCardData({commit},country){
        if (country ==="Global"){
            const response = await fetch('https://covid19.mathdro.id/api/');
            const datas = await response.json();
            commit('card',datas);
        }
        else{
            const response = await fetch(`https://covid19.mathdro.id/api/countries/${country}`);
            const datas = await response.json();
            commit('card',datas);
        }

    }

};
const mutations={
        dataGlobal :(state,stats) => {
            state.info.death =(stats.map((data)=>{
                return data.deaths.total;
            }))
            state.info.infected = (stats.map((data)=>{
                return data.totalConfirmed;
            }))
            state.info.date = (stats.map((data)=>{
                return data.reportDate;
            }))
           state.info.globalCheck = true;
        },
        allCountries:(state,stats)=>{
            state.info.countries = (stats.map((data)=>{
                return data.name;
            }))
        },
        dataByCountry :(state,stats) => {
        state.info.death = stats.deaths.value;

        state.info.infected = stats.confirmed.value;

        state.info.alive = stats.recovered.value;
        state.info.date = stats.lastUpdate;
        state.info.globalCheck = false;
        },
        card:(state,datas)=>{
            state.card.confirmed = datas.confirmed.value;
            state.card.recovered = datas.recovered.value;
            state.card.deaths = datas.deaths.value;
            state.card.lastUpdate = datas.lastUpdate;
        }


    }
;

export default {
    state,
    getters,
    actions,
    mutations

}
