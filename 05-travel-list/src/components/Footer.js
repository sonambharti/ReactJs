export default function Stats({items}) {
    if (!items.length) {
        return <p className='stats'>
            <em>
                Start adding some items to your packing list 🚀.
            </em>
        </p>
    }
    const numItem = items.length;
    const countPacked = items.filter((item) => item.packed).length;
    //   console.log(`countPacked = ${countPacked()}`);

  const percent = Math.round((countPacked/numItem)*100);
  return (
    <footer className="stats">
      <em>{percent === 100 
        ? "You got everything! Ready to go ✈️." 
        : `💼 You have ${numItem} items on your list, and you already packed ${percent}%.`}
      </em>
      {/* <em>💼 You have X items on your list, and you already packed X (X%)</em> */}
    </footer>
  )
}