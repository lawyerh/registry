import fetchPackagesByName from "../../api/queries/fetchPackagesByName";

export const searchLoader = async ({request}: {request: Request}) => {
        const { searchParams } = new URL(request.url);
        const term = searchParams.get("term");

        if (!term) throw new Error("Search term must be provided");

        const res = await fetchPackagesByName(term);

        return {
            searchResults: res
        }
}