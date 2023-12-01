"use client";
import Link from "next/link";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import { GET_CATEGOR_TREE } from "@/graphql/getCategoryTree";

import { StyledNavigation } from "./styled";

const Navigation = () => {
  const { data } = useQuery(GET_CATEGOR_TREE);
  const categoryList: any[] = data?.categoryList?.[0]?.children ?? [];

  return (
    <StyledNavigation>
      {categoryList.length > 0 && (
        <div>
          {categoryList.map((category: any) => {
            return (
              <div key={category.uid}>
                <Link href={`/${category.url_path}`} title={category.name}>
                  <span dangerouslySetInnerHTML={{ __html: category.name }} />
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </StyledNavigation>
  );
};

export default Navigation;
