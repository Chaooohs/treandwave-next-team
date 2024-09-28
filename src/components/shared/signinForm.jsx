

export const SigninForm = () => {
  return (
    <form className="flex flex-col mt-8">
      <input
        type="email"
        placeholder="email"
        className="h-[52px] bg-transparent border -[#bababa] rounded px-3 outline-none"
      />
      <input
        type="password"
        placeholder="password"
        className="h-[52px] bg-transparent border -[#bababa] rounded mt-6 px-3 outline-none"
      />
      <input
        type="submit"
        value='Увійти'
        className="h-[52px] bg-[#121212] rounded text-[#fdfdfd] font-semibold uppercase mt-8 outline-none cursor-pointer"
      />
    </form>
  )
}