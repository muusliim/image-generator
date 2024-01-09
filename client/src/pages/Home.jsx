import { useState } from "react";
import { Card, FormField, Loader } from "../components";

const RenderCards = ({ data, title }) => {
	if (data?.length > 0) {
		return data.map((post) => <Card key={post.id} {...post} />);
    }
    
    return (
        <h2 className="mt-5 font-bold violettext text-xl uppercase">{title}</h2>
    )
};

const Home = () => {
	const [loading, setLoading] = useState(false);
	const [allPosts, setAllPosts] = useState(null);
	const [searchText, setSearchText] = useState("");

	return (
		<section className="max-w-7xl mx-auto">
			<div>
				<h1 className="font-extrabold blacktext text-[32px]">
					The Community Showcase
				</h1>
				<p className="mt-2 graytext text-[16px] max-w-[600px]">
					Browse through a collection of imaginative and visually stunning
					images generated by DALL-E AI and MOOSLEEM
				</p>
			</div>
			<div className="mt-16">
				<FormField placeholder={'Type here'}/>
			</div>
			<div className="mt-10">
				{loading ? (
					<div className="flex justify-center items-center">
						<Loader />
					</div>
				) : (
					<>
						{searchText && (
							<h2 className="font-medium graytext text-xl mb-3">
								Showing results for{" "}
								<span className="blacktext">{searchText}</span>
							</h2>
						)}
						<div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                            {searchText ? (
                                <RenderCards data={[]} title='No search results found' />
                            ) : (
                                <RenderCards data={[]} title='No posts found'/>
                            )}
                        </div>
					</>
				)}
			</div>
		</section>
	);
};

export default Home;
