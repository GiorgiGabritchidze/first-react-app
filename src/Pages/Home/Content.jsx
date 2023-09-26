import ActiveButton from "../../Components/Buttons/Button-basic";

export default function Content() {
  return (
    <div>
      <div className="flexycontent">
        <div>
          <h1>About Me</h1>
          <h5>Photo Of Me</h5>
          <div className="Photo">Fake Image</div>
        </div>
        <div>
          <h1>Title Heading</h1>
          <h5>Title Description, 7 dec, 2020</h5>
          <div className="Photo2">Fake Image</div>
        </div>
      </div>
      <div className="flexycontent">
        <div>
          <h1>Some Links</h1>
          <h5>Lorem ipsum dolor sit ame.</h5>
          <ActiveButton />
          <div className="link">
            <a href="Link">Link</a>
          </div>
          <div className="link">
            <a href="Link">Link</a>
          </div>
          <div className="link">
            <a href="Link">Link</a>
          </div>
          <div className="link">
            <a href="Link">Disabled</a>
          </div>
        </div>
        <div>
          <h1>TITLE HEADING</h1>
          <h5>Title description, Sep 2, 2020</h5>
          <div className="Photo2">Fake Image</div>
        </div>
      </div>
    </div>
  );
}
