import { PageTitlte } from "../component/PageTitlte"
import { Meta } from "../utils/meta"

export const Blog = () => {
  return (
    <>
      <Meta title={"blog"} />
      <PageTitlte title={'Blog'} />
      <div className="flex font-bold text-[34px] w-full h-[240px] justify-center items-center">
        Comming soon ..
      </div>
    </>
  )
}
