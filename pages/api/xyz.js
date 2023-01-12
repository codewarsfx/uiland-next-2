

export default function handler(req, res) {
    async function insertToProfile() {
const { data, error } = await supabase.from("profile").select("event");
//   i will use this to limit the result later
//   .limit(1)
// .eq("id", user);
console.log("event", data, error);
res.send(data)}
insertToProfile()
}