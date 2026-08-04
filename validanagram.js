class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const Smap = new Map();
        if(s.length !== t.length) return false;

        for(let i = 0; i<s.length; i++){
            if(!Smap.has(s[i])){
                Smap.set(s[i],1);
            }else{
                Smap.set(s[i],Smap.get(s[i])+1);
            }
        }

        for(let j = 0;j<t.length;j++){
            if(Smap.has(t[j])){
                Smap.set(t[j],Smap.get(t[j])-1);
            }else{
                return false;
            }
        }

        for(const value of Smap.values()){
            if(value !== 0){
                return false;
            }
        }

        return true;

    }


}