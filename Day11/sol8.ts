function safeExecute<Args extends any[], T>(asyncFnc: (...args: Args) => Promise<T>) {
    return async (...args: Args): Promise<T | null> => {
        try {
            return await asyncFnc(...args);
        } catch (err) {
            console.error(err);
            return null;
        }
    }
}

const info = async (id: number): Promise<string> => {
    if(id === -1) throw new Error("Invalid ID");
    return `Data for ID: ${id}`
}


async function dryRun() {
    const getData = safeExecute(info);
    const res = await getData(10);
    const res1 = await getData(0);
    const res2 = await getData(-1);
    console.log(res, res1, res2);
}

dryRun();