package farizrifkyb.mini_cmdb.model.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ApplicationGroupResponse {
    private Long id;

    private String name;

    private String description;
    
    private ApplicationSimpleResponse application;

    private List<IpSimpleResponse> ips;
}