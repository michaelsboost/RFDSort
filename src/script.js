function App() {
  return {
    // --- UI state ---
    openMenu: false,
    name: 'RFDSort',
    version: 'v0.0.2',
    url: 'https://github.com/michaelsboost/RFDSort/',
    license: 'https://github.com/michaelsboost/RFDSort/blob/main/LICENSE',
    logo: 'https://michaelsboost.com/RFDSort/imgs/logo.svg',

    // --- Shifts/Sorts ---
    shiftOrder: ['sunrise','day','twilight','night'],
    shift: 'night',
    labelForShift(s){ return ({sunrise:'Sunrise', day:'Day', twilight:'Twilight', night:'Night'})[s] || s; },

    // Sidebar belts (short labels + colors)
    belts: [
      {chute:'Blue Yellow', short:'B-Y', color:'bg-blue-600'},
      {chute:'Blue Black',  short:'B-Bk', color:'bg-blue-800'},
      {chute:'Blue Blue',   short:'B-B',  color:'bg-blue-500'},
      {chute:'White Brown', short:'W-Br', color:'bg-gray-500'},
      {chute:'Blue Orange', short:'B-O',  color:'bg-orange-500'},
      {chute:'Blue Green',  short:'B-G',  color:'bg-green-600'},
      {chute:'Blue Red',    short:'B-R',  color:'bg-red-600'},
      {chute:'Blue White',  short:'B-W',  color:'bg-blue-400'},
      {chute:'White Orange',short:'W-O',  color:'bg-orange-300 text-black'},
      {chute:'White Green', short:'W-G',  color:'bg-green-400 text-black'},
      {chute:'Brown Brown', short:'Br-Br',color:'bg-yellow-800'},
      {chute:'Brown Blue',  short:'Br-B', color:'bg-blue-900'},
      {chute:'Brown Yellow',short:'Br-Y', color:'bg-yellow-500 text-black'},
      {chute:'Brown Black', short:'Br-Bk',color:'bg-black'},
      {chute:'Brown Orange',short:'Br-O', color:'bg-orange-700'},
      {chute:'Brown Green', short:'Br-G', color:'bg-green-800'},
      {chute:'Brown Red',   short:'Br-R', color:'bg-red-700'},
      {chute:'Brown White', short:'Br-W', color:'bg-gray-400 text-black'},
      {chute:'Yellow',      short:'Y',    color:'bg-yellow-400 text-black'},
      {chute:'Black',       short:'Bk',   color:'bg-black'},
      {chute:'White Red',   short:'W-R',  color:'bg-red-500'},
      {chute:'White White', short:'W-W',  color:'bg-gray-600'},
      {chute:'White Blue',  short:'W-B',  color:'bg-blue-400'},
      {chute:'Orange',      short:'O',    color:'bg-orange-400 text-black'},
      {chute:'Green Runout',short:'Run',  color:'bg-green-500'},
      {chute:'PD-1',        short:'PD1',  color:'bg-gray-300 text-black'},
      {chute:'PD-2',        short:'PD2',  color:'bg-gray-400 text-black'},
      {chute:'PD-3',        short:'PD3',  color:'bg-gray-500'},
    ],

    // --- RULES BY SHIFT ---
    rulesByShift: {
      sunrise: [
        // Add Sunrise rules here later
      ],
      day: [
        // Add Day rules here later
      ],
      twilight: [
        // Add Twilight rules here later
      ],
      night: [
        {state:'TX', zips:['735','750-758','760-767'], chute:['Blue Yellow','Blue Black'], dest:'DFW', pull:'225/245', wave:'2nd'},
        {state:'OK', zips:['735','750-758','760-767'], chute:['Blue Yellow','Blue Black'], dest:'DFW', pull:'225/245', wave:'2nd'},
        {state:'CA', zips:['900-928'], chute:'Blue Blue', dest:'ONT', pull:'201/221', wave:'1st'},
        {state:'CA', zips:['900-928'], chute:'White Brown', dest:'ONT', pull:'201/221', wave:'1st'},
        {state:'MI', zips:['484-499'], chute:'Blue Orange', dest:'LAN', pull:'227/247', wave:'2nd'},
        {state:'MI', zips:['480-483'], chute:'Blue Green', dest:'DTW', pull:'235/255', wave:'2nd'},
        {state:'OR', zips:['970-979'], chute:'Blue Red', dest:'PDX', pull:'153/213', wave:'1st'},
        {state:'WA', zips:['986-987'], chute:'Blue Red', dest:'PDX', pull:'153/213', wave:'1st'},
        {state:'MN', zips:['550-566'], chute:'Blue White', dest:'MSP', pull:'237/257', wave:'2nd'},
        {state:'WI', zips:['540', '546-548'], chute:'Blue White', dest:'MSP', pull:'237/257', wave:'2nd'},
        {state:'MD', zips:['200-219'], chute:'White Orange', dest:'BWI', pull:'221/241', wave:'2nd'},
        {state:'DC', zips:['200-219'], chute:'White Orange', dest:'BWI', pull:'221/241', wave:'2nd'},
        {state:'VA', zips:['201'], chute:'White Green', dest:'IAD', pull:'218/238', wave:'2nd'},
        {state:'MD', zips:['217', '220-228'], chute:'White Green', dest:'IAD', pull:'218/238', wave:'2nd'},
        {state:'WV', zips:['254', '267-268'], chute:'White Green', dest:'IAD', pull:'218/238', wave:'2nd'},
        {state:'IL', zips:['620-623'], chute:'Brown Brown', dest:'STL', pull:'250/310', wave:'2nd'},
        {state:'MO', zips:['630-637', '650-655'], chute:'Brown Brown', dest:'STL', pull:'250/310', wave:'2nd'},
        {state:'MO', zips:['640-646', '649', '653'], chute:'Brown Blue', dest:'MCI', pull:'258/318', wave:'2nd'},
        {state:'KS', zips:['660-666', '668'], chute:'Brown Blue', dest:'MCI', pull:'258/318', wave:'2nd'},
        {state:'CA', zips:['942','952-953','955-961'], chute:'Brown Yellow', dest:'MHR/MEM', pull:'147/207/248', wave:'1st'},
        {state:'TN', zips:['375-384'], chute:'Brown Yellow', dest:'MHR/MEM', pull:'147/207/248', wave:'1st'},
        {state:'CA', zips:['939-951','954'], chute:'Brown Black', dest:'OAK', pull:'142/202', wave:'1st'},
        {state:'MA', zips:['010-013', '668'], chute:'Brown Orange', dest:'BDL', pull:'222/242', wave:'2nd'},
        {state:'CT', zips:['060-069'], chute:'Brown Orange', dest:'BDL', pull:'222/242', wave:'2nd'},
        {state:'NY', zips:['104', '1006-119'], chute:'Brown Green', dest:'JFK', pull:'223/243', wave:'2nd'},
        {state:'TX', zips:['759','770-779'], chute:'Brown Red', dest:'IAH', pull:'231/251', wave:'2nd'},
        {state:'NE', zips:['689-691','693'], chute:'Brown White', dest:'DEN', pull:'149/209', wave:'1st'},
        {state:'CO', zips:['820-826'], chute:'Brown White', dest:'DEN', pull:'149/209', wave:'1st'},
        {state:'WY', zips:['820-826'], chute:'Brown White', dest:'DEN', pull:'149/209', wave:'1st'},
        {state:'NY', zips:['100-103'], chute:'Yellow', dest:'EWR', pull:'221/241', wave:'2nd'},
        {state:'NJ', zips:['070-079','085-089'], chute:'Black', dest:'EWR', pull:'221/241', wave:'2nd'},
        {state:'AZ', zips:['850-869'], chute:'White Red', dest:'PHX', pull:'200/220', wave:'1st'},
        {state:'IA', zips:['500-516','520-526'], chute:'White White', dest:'CID/OMA', pull:'242/248/256', wave:'1st'},
        {state:'NE', zips:['680-688'], chute:'White White', dest:'CID/OMA', pull:'242/248/256', wave:'1st'},
        {state:'OH', zips:['434','438-449'], chute:'White Blue', dest:'CLE', pull:'224/244', wave:'2nd'},
        {state:'WA', zips:['980-985'], chute:'Orange', dest:'BFI', pull:'151/211', wave:'1st'},
        {state:'IA', zips:['527-528'], chute:'Green Runout', dest:'PD Wall'},
        {state:'IL', zips:['601-603','605','610','612-617'], chute:'Green Runout', dest:'PD Wall'},
        {state:'IL', zips:['601','604-606','608-609'], chute:'PD-2', dest:'PD Wall'},
        {state:'WI', zips:['530-539','541-545','549'], chute:'PD-1', dest:'PD Wall'},
        {state:'IL', zips:['60546','606-607','610-611'], chute:'PD-3', dest:'PD Wall'},
        {state:'OH', zips:['436'], chute:'Blue Green', dest:'DTW', pull:'235/255', wave:'2nd'},
      ]
    },

    // Derived (current view)
    rules: [],
    states: [],
    selectedState: null,
    selectedBelt: null,
    matches: [],
    beltMatches: [],
    highlightedSet: new Set(),
    byChute: new Map(),

    // THEME
    theme: localStorage.getItem('theme') || 'dark',

    // --- Lifecycle ---
    init() {
      this.applyShift();
      this.applyTheme();

      this.$watch('theme', (t) => {
        localStorage.setItem('theme', t);
        this.applyTheme();
      });
      
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      mq.addEventListener?.('change', () => {
        if (this.theme === 'auto') this.applyTheme();
      });
    },

    applyTheme() {
      const html = document.documentElement;
      let color;
      let value = this.theme;

      if (value === 'auto') {
        value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }

      if (value === 'dark') {
        color = '#13171f';
      } else {
        color = 'hsl(205deg 18.75% 87.45%)';
      }

      html.setAttribute('data-theme', value);
      document.querySelector('meta[name=theme-color]').setAttribute('content', color);
      document.querySelector('meta[name=msapplication-navbutton-color]').setAttribute('content', color);
    },

    toggleTheme() {
      const resolved = (this.theme === 'auto')
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : this.theme;

      this.theme = (resolved === 'dark') ? 'light' : 'dark';
      this.applyTheme();
    },

    // --- Helpers ---
    asArray(v){ return Array.isArray(v) ? v : [v]; },
    isHighlighted(chute){ return this.highlightedSet.has(chute); },

    // --- Shift handling ---
    setShift(s){
      if (this.shift === s) return;
      this.shift = s;
      this.applyShift();
    },
    applyShift(){
      this.selectedState = null;
      this.selectedBelt  = null;
      this.matches = [];
      this.beltMatches = [];
      this.highlightedSet = new Set();

      this.rules = this.rulesByShift[this.shift] || [];

      this.states = [...new Set(this.rules.map(r => r.state))].sort();

      this.byChute = new Map();
      this.rules.forEach((r, i) => {
        this.asArray(r.chute).forEach(c => {
          if(!this.byChute.has(c)) this.byChute.set(c, []);
          this.byChute.get(c).push({...r, _key:`belt:${this.shift}:${c}:${i}:${r.state}:${(r.dest||'')}`});
        });
      });
    },

    // --- Actions ---
    showState(code){
      this.selectedBelt = null;
      this.selectedState = code;
      this.matches = this.rules
        .filter(r => r.state === code)
        .map((r,i) => ({...r, _key: `state:${this.shift}:${code}:${i}:${(r.dest||'')}:${this.asArray(r.chute).join('|')}`}));

      this.highlightedSet = new Set();
      this.matches.forEach(m => this.asArray(m.chute).forEach(c => this.highlightedSet.add(c)));
    },

    showBelt(chuteName){
      this.selectedState = null;
      this.selectedBelt = chuteName;
      this.beltMatches = this.byChute.get(chuteName) || [];
      this.highlightedSet = new Set([chuteName]);
    },

    clear(){
      this.selectedState = null;
      this.selectedBelt  = null;
      this.matches = [];
      this.beltMatches = [];
      this.highlightedSet = new Set();
    }
  }
}